import React from 'react';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AppointmentBooking from '../components/sections/AppointmentBooking';
import KeywordsRelation from '../components/sections/KeywordsRelation';
import ScienceBehindTreatment from '../components/sections/ScienceBehindTreatment';
import HairTreatmentTypes from '../components/sections/HairTreatmentTypes';
import HairFallStages from '../components/sections/HairfallStages';
import DoctorSpeaks from '../components/sections/DoctorSpeaks';
import GoogleReviewSection from '../components/sections/GoogleReviewSection';
import ClinicNearMeSection from '../components/sections/ClinicNearMeSection';
import ChatSection from '../components/sections/ChatSection';
import HeroSection from '../components/sections/HeroSection';
import BottomStats from '../components/sections/BottomStats';

const Home = ({ location }) => {
  return (
    <>
      <HeroSection />
      <BottomStats />
      <TestimonialsSection />
      <AppointmentBooking />
      <KeywordsRelation />
      <ScienceBehindTreatment />
      <HairTreatmentTypes />
      <HairFallStages />
      <DoctorSpeaks />
      <GoogleReviewSection />
      <ClinicNearMeSection location={location} />
      <ChatSection />
    </>
  );
};

export default Home; 