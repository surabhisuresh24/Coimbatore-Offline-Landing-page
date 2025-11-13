'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  GraduationCap,
  Users,
  Award,
  Globe,
  Clock,
  BookOpen,
  Target,
  CheckCircle,
  Briefcase,
  DollarSign,
  MapPin,
  Phone,
  Download,
  X,
  TrendingUp,
  Calendar
} from 'lucide-react';
import LeadForm from './LeadForm';

type FormIntent = 'default' | 'download';

/** Brochure direct download (your file link) */
const DIRECT_DRIVE_DOWNLOAD =
  'https://drive.google.com/uc?export=download&id=1DYGeUhglmY2VYWOlhYm7PHabdkNUja1S';
const LOCAL_BROCHURE = '/CMA_USA_Brochure.pdf';
const DRIVE_FOLDER_FALLBACK =
  'https://drive.google.com/drive/folders/14pbn5wxF2c6i-I0i_plcUzig0a1Fdrom';

function App() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [nextSunday, setNextSunday] = useState('');
  const [formIntent, setFormIntent] = useState<FormIntent>('default');

  const getBrochureUrl = () =>
    DIRECT_DRIVE_DOWNLOAD || LOCAL_BROCHURE || DRIVE_FOLDER_FALLBACK;

  useEffect(() => {
    const getNextSunday = () => {
      const today = new Date();
      const daysUntilSunday = 7 - today.getDay();
      const nextSun = new Date(today);
      nextSun.setDate(today.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday));
      const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
      return nextSun.toLocaleDateString('en-US', options);
    };
    setNextSunday(getNextSunday());
  }, []);

  const handleFormSuccess = () => {
    setShowFormModal(false);

    // ensure page becomes scrollable again after form submit
    document.body.style.overflow = 'unset';

    if (formIntent === 'download') {
      const link = document.createElement('a');
      link.href = getBrochureUrl();
      link.download = 'CMA_USA_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFormModal = (intent: FormIntent = 'default') => {
    setFormIntent(intent);
    setShowFormModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFormModal = () => {
    setShowFormModal(false);
    document.body.style.overflow = 'unset';
  };

  const faculties = [
    {
      name: 'Arun M',
      image:
        'https://api.lakshyacommerce.com/uploads/backend/faculty/170685994465217059161126171705125688970Mr%20ARUN%20M.png',
      years: 7,
    },
    {
      name: 'Navavi Sabaka',
      image:
        'https://api.lakshyacommerce.com/uploads/backend/faculty/170685988226117059169845521705125886627CMA%20NAVAVI%20SABAKA%201.png',
      years: 9,
    },
    {
      name: 'Raaed C',
      image:
        'https://api.lakshyacommerce.com/uploads/backend/faculty/1706859932457170591756951017059122480331705906280060CMA%20RAAED%20C%201.png',
      years: 9,
    },
    {
      name: 'Muhammad Irfan',
      image:
        'https://api.lakshyacommerce.com/uploads/backend/faculty/1706859869339170591776271217059122941151705906575107Muhammed%20Irfan%201.png',
      years: 5,
    },
    {
      name: 'Nisar KV',
      image:
        'https://api.lakshyacommerce.com/uploads/backend/faculty/1706859908162170591751241717059122692871705906421194Mr%20NISAR%20KV%201.png',
      years: 5,
    },
  ];

  if (showThankYou) {
    return (
      <>
        {/* GTM: immediately after <head> */}
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XLDC59F');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>

        {/* GTM noscript: immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XLDC59F"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="min-h-screen bg-gradient-to-br from-[#00528a] to-[#45afe3] flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#00528a] mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Your details have been submitted successfully. Our counselor will contact you shortly to guide you through
              your CMA USA journey at our Coimbatore campus.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = getBrochureUrl();
                  link.download = 'CMA_USA_Brochure.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center justify-center space-x-2 bg-[#feda2d] hover:bg-[#e5c628] text-[#00528a] font-bold px-6 py-4 rounded-lg transition"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>

              <a
                href="https://maps.app.goo.gl/MvDLwnSqcKaj1job9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#00528a] hover:bg-[#003d6b] text-white font-bold px-6 py-4 rounded-lg transition"
              >
                <MapPin className="w-5 h-5" />
                <span>Visit Our Office</span>
              </a>
            </div>

            <button
              onClick={() => {
                setShowThankYou(false);
                document.body.style.overflow = 'unset';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 text-[#45afe3] hover:text-[#00528a] font-semibold"
            >
              ← Back to Homepage
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* GTM: immediately after <head> */}
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XLDC59F');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>

      {/* GTM noscript: immediately after <body> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5XLDC59F"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <div className="min-h-screen bg-white pb-24 md:pb-0">
        {showFormModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl my-8">
              <button
                onClick={closeFormModal}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <LeadForm onSuccess={handleFormSuccess} />
            </div>
          </div>
        )}

        <div className="bg-[#feda2d] py-3 text-center sticky top-0 z-40 shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-2">
            <Calendar className="w-5 h-5 text-[#00528a]" />
            <p className="text-[#00528a] font-bold text-sm md:text-base">
              Apply Now! Application for next batch closes {nextSunday} - Limited Seats Available!
            </p>
          </div>
        </div>

        <header className="bg-[#00528a] text-white py-4 px-4 md:px-8 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/white.png" alt="Lakshya Commerce Logo" className="h-10 md:h-12 w-auto" />
            </div>
            <button
              onClick={() => openFormModal('default')}
              className="bg-[#feda2d] hover:bg-[#e5c628] text-[#00528a] px-4 md:px-6 py-2 rounded-lg font-bold transition text-sm md:text-base"
            >
              Apply Now
            </button>
          </div>
        </header>

        {/* MOBILE-ONLY fixed bottom CTA bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
            <button
              onClick={() => openFormModal('default')}
              className="flex items-center justify-center space-x-2 bg-[#00528a] hover:bg-[#003d6b] text-white font-bold px-4 py-3 rounded-lg transition"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">Speak to Counsellor</span>
            </button>

            <button
              onClick={() => openFormModal('download')}
              className="flex items-center justify-center space-x-2 bg-[#feda2d] hover:bg-[#e5c628] text-[#00528a] font-bold px-4 py-3 rounded-lg transition"
            >
              <Download className="w-5 h-5" />
              <span className="text-sm">Download Brochure</span>
            </button>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#00528a] via-[#00528a] to-[#45afe3] text-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-[#feda2d] text-[#00528a] px-4 py-2 rounded-full font-bold text-sm mb-4">
              15+ YEARS OF EXCELLENCE
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white text-center">
              Start Your Global Commerce Career in <br />
              <span className="text-white">Just </span>
              <span className="text-[#feda2d]">9-12 Months</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">Join CMA USA Offline Classes at Our Coimbatore Campus</p>
            <p className="text-base md:text-lg mb-8 text-gray-100 max-w-3xl mx-auto">
              World-class faculty, proven curriculum, and personalized mentorship to help you become a Certified Management
              Accountant
            </p>
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#feda2d]" />
                <span className="font-semibold">IMA Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#feda2d]" />
                <span className="font-semibold">Global Recognition</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-[#feda2d]" />
                <span className="font-semibold">Placement Support</span>
              </div>
            </div>

            <button
              onClick={() => openFormModal('default')}
              className="bg-[#feda2d] hover:bg-[#e5c628] text-[#00528a] font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg"
            >
              Apply for Admission
            </button>
          </div>
        </section>

        <section className="py-8 bg-[#feda2d]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-2">1500+</div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Qualified CMA USA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-2">1000+</div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Global & National Ranks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-2">500+</div>
                <div className="text-sm md:text-base font-semibold text-gray-700">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-2">100,000+</div>
                <div className="text-sm md:text-base font-semibold text-gray-700">CMAs Globally</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is CMA USA? */}
        <section className="pt-12 md:pt-20 pb-0 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-y-0 gap-x-4 md:gap-12 items-stretch">
              {/* LEFT */}
              <div className="pb-0 md:pb-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4 md:mb-6">
                  What is CMA USA?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Certified Management Accountant (CMA) USA is a globally recognized professional certification offered
                  by the Institute of Management Accountants (IMA). This prestigious credential validates your expertise in
                  financial planning, analysis, control, decision support, and professional ethics.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With over 100,000 certified professionals across 150+ countries, CMA USA opens doors to international
                  career opportunities in management accounting, financial management, and strategic business leadership.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Complete the certification in just 9-12 months and transform your career trajectory with higher earning
                  potential and global recognition.
                </p>

                <button
                  onClick={() => openFormModal('default')}
                  className="mt-6 block mx-auto bg-[#00528a] hover:bg-[#003d6b] text-white font-bold px-6 py-3 rounded-lg transition"
                >
                  Get Course Details
                </button>
              </div>

              {/* RIGHT */}
              <div className="-mt-8 md:mt-0 flex items-end md:justify-end">
                <img
                  src="/images/mamitha.png"
                  alt="CMA USA Brand Ambassadors"
                  className="block mx-auto md:mx-0 w-auto h-auto object-contain max-h-[600px] lg:max-h-[640px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ====== UPDATED CERTIFICATE SECTION ====== */}
        <section className="py-12 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">CMA USA Certificate</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Earn a globally recognized certification from the Institute of Management Accountants (IMA)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#00528a] mb-4">
                  Get Globally Certified
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The CMA USA certificate is awarded by the Institute of Management Accountants (IMA), a global association
                  with over 100,000 members worldwide.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  This certification demonstrates your commitment to professional excellence and validates your expertise
                  in management accounting and financial management.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-[#45afe3]" />
                    <span className="text-gray-800">Recognized by employers globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-[#45afe3]" />
                    <span className="text-gray-800">Lifetime professional credential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-[#45afe3]" />
                    <span className="text-gray-800">Career advancement opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="w-full">
                <img
                  src="/images/cma usa certificate.jpg"
                  alt="CMA USA Certificate"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => openFormModal('default')}
                className="bg-[#feda2d] hover:bg-[#e5c628] text-[#00528a] font-bold px-8 py-4 rounded-lg transition text-lg"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </section>
        {/* ====== END UPDATED CERTIFICATE SECTION ====== */}

        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">CMA USA Salary in India</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                CMAs command premium salaries in the Indian market with excellent growth potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#45afe3] to-[#00528a] text-white p-8 md:p-10 rounded-2xl shadow-xl text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-[#feda2d]" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Average Salary</h3>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">₹8-12 LPA</div>
                <p className="text-gray-100">For freshers and entry-level professionals</p>
              </div>

              <div className="bg-gradient-to-br from-[#feda2d] to-[#00528a] text-white p-8 md:p-10 rounded-2xl shadow-xl text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-4 text-[#feda2d]" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Highest Salary</h3>
                <div className="text-4xl md:text-5xl font-extrabold mb-2">₹25+ LPA</div>
                <p className="text-gray-100">For experienced professionals in top companies</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-xl max-w-5xl mx-auto">
              <p className="text-gray-700 text-center">
                <strong>Note:</strong> Salaries vary based on experience, location, company size, and industry. With 3-5
                years of experience, CMAs typically earn ₹15-20 LPA. Senior positions in MNCs and consulting firms offer
                packages of ₹30-50 LPA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">Who Should Choose CMA USA?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                CMA USA is perfect for ambitious individuals ready to excel in the global finance and accounting sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#45afe3]">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#45afe3] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Students who have completed higher secondary, +2 and are looking to embrace global opportunities
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#feda2d]">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#feda2d] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Graduates and Postgraduates aspiring for a career in Accounting and Finance
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#00528a]">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#00528a] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Aspiring or qualified chartered accountants looking for a global career in Management Accounting within
                    a shorter duration
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#45afe3]">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#45afe3] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    Working professionals in the finance or accounting sector willing to advance their careers in all
                    aspects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------- FACULTY SECTION ----------- */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">Our Expert Faculties</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from industry-leading professionals and certified CMAs with years of experience
              </p>
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
                {faculties.map((faculty, index) => (
                  <div
                    key={`m-${index}`}
                    className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex-shrink-0 border"
                    style={{ width: 240 }}
                  >
                    <div className="bg-white">
                      <div className="aspect-[3/4] p-3">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-contain object-top"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              'https://via.placeholder.com/300x400?text=' + encodeURIComponent(faculty.name);
                          }}
                        />
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-[#00528a] text-lg">{faculty.name}</h3>
                      <p className="mt-2 text-gray-700 text-sm md:text-base">
                        {faculty.years}+ years of experience
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/Desktop: grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {faculties.map((faculty, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="bg-white">
                    <div className="aspect-[3/4] p-4">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-contain object-top"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            'https://via.placeholder.com/300x400?text=' + encodeURIComponent(faculty.name);
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-[#00528a] text-lg">{faculty.name}</h3>
                    <p className="mt-2 text-gray-700 text-sm md:text-base">
                      {faculty.years}+ years of experience
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => openFormModal('default')}
                className="bg-[#00528a] hover:bg-[#003d6b] text-white font-bold px-8 py-4 rounded-lg transition text-lg"
              >
                Meet Our Faculty
              </button>
            </div>
          </div>
        </section>
        {/* ----------- END FACULTY SECTION ----------- */}

        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">Campus Tour - Coimbatore</h2>
              <p className="text-lg md:text-xl text-gray-600">Take a virtual tour of our world-class Coimbatore campus facilities</p>
            </div>

            <div className="relative mb-12" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/0r9B53qadNY?si=wA62eob3ibicfcfg"
                title="Lakshya Commerce Coimbatore Campus Tour"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#00528a] mb-6">Success Stories From Our Students</h3>
              <p className="text-lg text-gray-600 mb-8">
                Hear directly from students who transformed their careers with CMA USA at Lakshya
              </p>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-6 px-2" style={{ width: 'max-content' }}>
                  {/* Testimonial 1 */}
                  <div className="flex-shrink-0" style={{ width: '90vw', maxWidth: '500px' }}>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                        src="https://drive.google.com/file/d/16At6qEMgEPx02cmQAh7k4CshjfWmv1Er/preview"
                        title="CMA USA Testimonial 1"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex-shrink-0" style={{ width: '90vw', maxWidth: '500px' }}>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                        src="https://drive.google.com/file/d/1ue3WAh2z-b-XeuukyApkVYH7IUg9XQuh/preview"
                        title="CMA USA Testimonial 2"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex-shrink-0" style={{ width: '90vw', maxWidth: '500px' }}>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                        src="https://drive.google.com/file/d/1M9EJ9kdgi0hbJGLXTWZADfkMquie59WR/preview"
                        title="CMA USA Testimonial 3"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-[#00528a] to-[#45afe3] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Why CMA USA?</h2>
              <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
                Globally recognized certification that opens doors to unlimited career opportunities
              </p>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-6 md:gap-8 px-2" style={{ width: 'max-content' }}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-shrink-0" style={{ width: '300px' }}>
                    <Clock className="w-12 h-12 text-[#feda2d] mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Fast Track Career</h3>
                    <p className="text-gray-100">Complete in just 9-12 months and kickstart your global commerce career</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-shrink-0" style={{ width: '300px' }}>
                    <Globe className="w-12 h-12 text-[#feda2d] mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Global Recognition</h3>
                    <p className="text-gray-100">Recognized in 150+ countries with 100,000+ certified professionals worldwide</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-shrink-0" style={{ width: '300px' }}>
                    <DollarSign className="w-12 h-12 text-[#feda2d] mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Higher Salary</h3>
                    <p className="text-gray-100">CMAs earn significantly higher salaries compared to non-certified professionals</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-shrink-0" style={{ width: '300px' }}>
                    <Briefcase className="w-12 h-12 text-[#feda2d] mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Diverse Roles</h3>
                    <p className="text-gray-100">Flexibility to move across business areas with roles in finance, strategy, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">Course Structure</h2>
              <p className="text-lg md:text-xl text-gray-600">Comprehensive two-part exam covering 12 essential competencies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#45afe3]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00528a] mb-6">CMA Part 1</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">Financial Planning, Performance, and Analytics</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">External Financial Reporting Decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Planning, Budgeting and Forecasting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Performance Management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cost Management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Internal Controls</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#45afe3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Technology and Analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#feda2d]">
                <h3 className="text-2xl md:text-3xl font-bold text-[#00528a] mb-6">CMA Part 2</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">Strategic Financial Management</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Financial Statement Analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Corporate Finance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Decision Analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Risk Management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Investment Decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#feda2d] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional Ethics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => openFormModal('default')}
                className="bg-[#00528a] hover:bg-[#003d6b] text-white font-bold px-8 py-4 rounded-lg transition text-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#00528a] mb-4">Career Opportunities</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                CMA USA opens doors to prestigious roles in top global companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#45afe3] to-[#00528a] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="w-8 h-8 mr-3" />
                  Finance & Accounting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Chief Financial Officer (CFO)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Financial Analyst</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Cost Accountant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Budget Analyst</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Management Accountant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Corporate Controller</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#feda2d] to-[#00528a] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="w-8 h-8 mr-3" />
                  Strategy & Management
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Finance Manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Risk Manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Financial Planning Manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Operations Manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Internal Auditor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Treasury Manager</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* LOGOS: local images (full color by default) */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[#00528a] mb-8 text-center">
                Our Students Work At Top Global Companies
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center mb-6">
                <img src="/images/PWC.webp" alt="PwC" className="h-10 w-auto" />
                <img src="/images/DELOITTE.webp" alt="Deloitte" className="h-10 w-auto" />
                <img src="/images/EY.webp" alt="EY" className="h-10 w-auto" />
                <img src="/images/KPMG.webp" alt="KPMG" className="h-10 w-auto" />
                <img src="/images/mckinsey..png" alt="McKinsey" className="h-10 w-auto" />
                <img src="/images/BCG.png" alt="BCG" className="h-10 w-auto" />
                <img src="/images/AMAZON.webp" alt="Amazon" className="h-10 w-auto" />
                <img src="/images/ibm.png" alt="IBM" className="h-10 w-auto" />
                <img src="/images/Goldman_Sachs.png" alt="Goldman Sachs" className="h-10 w-auto" />
                <img src="/images/JP Morgan.png" alt="JP Morgan" className="h-10 w-auto" />
                <img src="/images/INFOSYS.webp" alt="Infosys" className="h-10 w-auto" />
                <img src="/images/Accenture.png" alt="Accenture" className="h-10 w-auto" />
                <img src="/images/WIPRO.webp" alt="Wipro" className="h-10 w-auto" />
                <img src="/images/TCS.png" alt="TCS" className="h-10 w-auto" />
                <img src="/images/HSBC.webp" alt="HSBC" className="h-10 w-auto" />
                <img src="/images/CITI BANK.webp" alt="Citibank" className="h-10 w-auto" />
                <img src="/images/BARCLAYS.webp" alt="Barclays" className="h-10 w-auto" />
                <img src="/images/RELIANCE.webp" alt="Reliance" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 bg-[#00528a] text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Visit Our Coimbatore Campus</h2>
              <p className="text-lg md:text-xl text-gray-100">Experience world-class infrastructure and learning environment</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-[#feda2d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Our Location</h3>
                  <p className="text-gray-100 leading-relaxed text-lg">
                    4th Floor no. 1619, Cheran Plaza, Trichy Road, Coimbatore  641018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-900 text-center py-6">
          <p className="text-gray-400">&copy; 2025 Indian Institute of Commerce Lakshya. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;
