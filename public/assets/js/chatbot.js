/**
 * GpConversationRouter - Class for handling chatbot interactions
 * This class provides an interface to connect with the chatbot service
 */
class GpConversationRouter {
  /**
   * Constructor for the GpConversationRouter class
   * @param {Object} config - Configuration options for the router
   */
  constructor(config) {
    this.config = config || {};

    
    // Fix potential protocol issues by ensuring https://
    let host = config.host || "https://chatbot-router.qwick.ai";
    if (!host.startsWith('http')) {
      host = 'https://' + host;
    }
    this.host = host;
    
    this.chatbot_num = config.chatbot_num;
    this.embed = config.embed || "IFRAME";
    this.auto_open = config.auto_open !== undefined ? config.auto_open : false;
    this.userInformation = {};
    this.userIntent = {};
    this.room_id = "";
    this.iframe = null;
    this.isOpen = false;
    this.connectionFailed = false;
    this.overlapsHeroSection = false;
    
    // Create chatbot container
    this._createChatbotContainer();
    
    // Add window error listener
    window.addEventListener('error', this._handleWindowError.bind(this), true);
    
    // Initialize hero section detection after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this._initHeroSectionDetection();
    });
    
    // Also try initializing if DOMContentLoaded already fired
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => this._initHeroSectionDetection(), 500);
    }
  }

// hero section detection starts here
  /*
   * @private
   */
  _initHeroSectionDetection() {
    const heroSection = document.querySelector('.hero-section');
    const chatbotButton = document.getElementById('chatbot-button');
    
    if (!heroSection) {
      console.log('Hero section not found (looking for .hero-section), will try again in 1s');
      setTimeout(() => this._initHeroSectionDetection(), 1000);
      return;
    }
    
    if (!chatbotButton) {
      console.log('Chatbot button not found, will try again later');
      setTimeout(() => this._initHeroSectionDetection(), 1000);
      return;
    }
    
    console.log('Found hero section and chatbot button, initializing position detection');
    
    // Set initial button style based on position
    this._checkButtonPosition(heroSection, chatbotButton);
    
    // Update on scroll
    window.addEventListener('scroll', () => {
      this._checkButtonPosition(heroSection, chatbotButton);
    });
    
    // Update on resize
    window.addEventListener('resize', () => {
      this._checkButtonPosition(heroSection, chatbotButton);
    });
  }
  
  /**
   * Check if button overlaps with hero section and update style accordingly
   * @private
   * @param {HTMLElement} heroSection - The hero section element
   * @param {HTMLElement} button - The chatbot button element
   */
  _checkButtonPosition(heroSection, button) {
    // Get positions and dimensions
    const heroRect = heroSection.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Check if button overlaps with hero section
    const overlaps = !(
      buttonRect.right < heroRect.left || 
      buttonRect.left > heroRect.right || 
      buttonRect.bottom < heroRect.top || 
      buttonRect.top > heroRect.bottom
    );
    
    // Only update if the state changed
    if (overlaps !== this.overlapsHeroSection) {
      this.overlapsHeroSection = overlaps;
      this._updateButtonStyle();
    }
  }
  
  /**
   * Update button style based on position relative to hero section
   * @private
   */
  _updateButtonStyle() {
    const button = document.getElementById('chatbot-button');
    if (!button) return;
    
    if (this.overlapsHeroSection) {
      // When overlapping hero section: white background with blue icon
      button.style.backgroundColor = '#FFFFFF';
      button.style.color = '#1167B1';
    } else {
      // Default: blue background with white icon
      button.style.backgroundColor = '#1167B1';
      button.style.color = 'white';
    }
  }
// hero section detection ends here


  /**
   * Create the chatbot container in the DOM
   * @private
   */
  _createChatbotContainer() {
    // Create container for the chatbot
    const container = document.createElement('div');
    container.id = 'chatbot-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    
    // Create button to open/close chatbot
    const button = document.createElement('button');
    button.id = 'chatbot-button';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = '#1167B1';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    button.style.transition = 'all 0.3s ease'; // Add smooth transition
    
    button.addEventListener('click', () => {
      this.toggleChat();
    });
    
    container.appendChild(button);
    
    // Create error message element (hidden initially)
    const errorMessage = document.createElement('div');
    errorMessage.id = 'chatbot-error-message';
    errorMessage.style.display = 'none';
    errorMessage.style.backgroundColor = 'white';
    errorMessage.style.color = '#333';
    errorMessage.style.border = '1px solid #e1e1e1';
    errorMessage.style.borderRadius = '10px';
    errorMessage.style.padding = '15px';
    errorMessage.style.marginBottom = '10px';
    errorMessage.style.width = '350px';
    errorMessage.style.fontSize = '14px';
    errorMessage.innerHTML = `
      <div style="margin-bottom: 10px;"><strong>Connection Error</strong></div>
      <p>Unable to connect to the chat service. Please try again later or contact support.</p>
      <p style="font-size: 12px; color: #666; margin-top: 10px;">Error: Failed to connect to ${this.host}</p>
      <button id="chatbot-retry-button" style="background-color: #1167B1; color: white; border: none; padding: 8px 15px; border-radius: 4px; margin-top: 10px; cursor: pointer;">Try Again</button>
    `;
    
    container.appendChild(errorMessage);
    
    // Add event listener for retry button after DOM is loaded
    setTimeout(() => {
      const retryButton = document.getElementById('chatbot-retry-button');
      if (retryButton) {
        retryButton.addEventListener('click', () => {
          errorMessage.style.display = 'none';
          this.connectionFailed = false;
          this.tryAlternateHost();
          this.openChat();
        });
      }
    }, 100);
  }

  /**
   * Handle window error events
   * @private
   */
  _handleWindowError(event) {
    // Check if the error is related to the chatbot iframe
    if (this.iframe && event.target && event.target === this.iframe) {
      console.error('Chatbot iframe error:', event);
      this.showConnectionError();
    }
  }

  /**
   * Try connecting with an alternate host
   */
  tryAlternateHost() {
    // Try alternative hosts if the main one fails
    const alternateHosts = [
      'https://api.qwick.ai',
      'https://chatbot.qwick.ai',
      'https://chat-router.qwick.ai'
    ];
    
    // Find a host we haven't tried yet
    const currentHost = this.host;
    for (const host of alternateHosts) {
      if (host !== currentHost) {
        console.log(`Trying alternate host: ${host}`);
        this.host = host;
        break;
      }
    }
  }

  /**
   * Show connection error message
   */
  showConnectionError() {
    this.connectionFailed = true;
    
    // Hide iframe if it exists
    if (this.iframe) {
      this.iframe.style.display = 'none';
    }
    
    // Show error message
    const errorMessage = document.getElementById('chatbot-error-message');
    if (errorMessage) {
      errorMessage.style.display = 'block';
      
      // Update error message with current host
      const errorDetails = errorMessage.querySelector('p:nth-child(2)');
      if (errorDetails) {
        errorDetails.textContent = `Error: Failed to connect to ${this.host}`;
      }
    }
  }

  /**
   * Toggle the chatbot visibility
   */
  toggleChat() {
    if (this.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  /**
   * Open the chatbot
   */
  openChat() {
    const container = document.getElementById('chatbot-container');
    
    // Hide error message if shown
    const errorMessage = document.getElementById('chatbot-error-message');
    if (errorMessage) {
      errorMessage.style.display = 'none';
    }
    
    if (!this.iframe) {
      this.iframe = document.createElement('iframe');
      this.iframe.id = 'chatbot-iframe';
      this.iframe.style.width = '350px';
      this.iframe.style.height = '500px';
      this.iframe.style.border = '1px solid #e1e1e1';
      this.iframe.style.borderRadius = '10px';
      this.iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      this.iframe.style.marginBottom = '10px';
      this.iframe.style.display = 'block';
      this.iframe.style.backgroundColor = '#FFFFFF';
      
      // Set up load event handlers
      this.iframe.onload = () => {
        // Successfully loaded
        this.connectionFailed = false;
        this._sendMessageToIframe({
          type: 'INIT',
          userInformation: this.userInformation,
          userIntent: this.userIntent,
          room_id: this.room_id
        });
      };
      
      this.iframe.onerror = () => {
        console.error(`Failed to load iframe from ${this.host}`);
        this.showConnectionError();
      };
      
      // Set the iframe src to the chatbot URL
      try {
        // Use the correct URL format based on the host
        if (this.host.includes('chatbot.qwick.ai')) {
          // Direct to homepage for chatbot.qwick.ai as it uses a form-based approach
          this.iframe.src = this.host;
        } else {
          // Use traditional embed path for other hosts
          this.iframe.src = `${this.host}/embed/${this.chatbot_num}`;
        }
        
        container.insertBefore(this.iframe, container.firstChild);
      } catch (error) {
        console.error('Error setting iframe source:', error);
        this.showConnectionError();
      }
    } else {
      if (this.connectionFailed) {
        // If previous connection failed, try again with current host
        try {
          if (this.host.includes('chatbot.qwick.ai')) {
            this.iframe.src = this.host;
          } else {
            this.iframe.src = `${this.host}/embed/${this.chatbot_num}`;
          }
          this.iframe.style.display = 'block';
        } catch (error) {
          console.error('Error setting iframe source:', error);
          this.showConnectionError();
        }
      } else {
        this.iframe.style.display = 'block';
      }
    }
    
    this.isOpen = true;
  }

  /**
   * Close the chatbot
   */
  closeChat() {
    if (this.iframe) {
      this.iframe.style.display = 'none';
    }
    
    // Hide error message if shown
    const errorMessage = document.getElementById('chatbot-error-message');
    if (errorMessage) {
      errorMessage.style.display = 'none';
    }
    
    this.isOpen = false;
  }

  /**
   * Add user information for the chatbot
   * @param {Object} userInformation - User information to be sent to the chatbot
   */
  addUserInformation(userInformation) {
    this.userInformation = userInformation;
  }

  /**
   * Add user intent for the chatbot
   * @param {Object} userIntent - Intent information to be sent to the chatbot
   */
  addUserIntent(userIntent) {
    this.userIntent = userIntent;
  }

  /**
   * Add room ID for the chatbot session
   * @param {string} room_id - Room ID for the chatbot
   */
  addRoomId(room_id) {
    this.room_id = room_id;
  }

  /**
   * Connect to the chatbot service
   * Initializes the connection to the chatbot server
   */
  connect() {
    console.log('Initializing chatbot connection to:', this.host);
    console.log('Chatbot config:', {
      chatbot_num: this.chatbot_num,
      embed: this.embed,
      auto_open: this.auto_open
    });
    
    // If auto_open is true, open the chat automatically
    if (this.auto_open) {
      this.openChat();
    }
  }

  /**
   * Send message to the iframe
   * @private
   * @param {Object} message - Message to send to the iframe
   */
  _sendMessageToIframe(message) {
    try {
      if (this.iframe && this.iframe.contentWindow) {
        this.iframe.contentWindow.postMessage(message, '*');
      }
    } catch (error) {
      console.error('Error sending message to iframe:', error);
    }
  }
}

// Make the class available globally
window.GpConversationRouter = GpConversationRouter; 