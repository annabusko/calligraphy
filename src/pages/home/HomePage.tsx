import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../shared/components/LanguageSwitcher/LanguageSwitcher';

export const HomePage = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#fefaf3] text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fefaf3]/95 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-orange-600">{t('appName', 'Прописи')}</div>
          <nav className="flex gap-6 items-center text-sm font-medium">
            <button 
              onClick={() => scrollToSection('tracing')}
              className="hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            >
              {t('menu.tracing')}
            </button>
            <button 
              onClick={() => scrollToSection('how')}
              className="hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            >
              {t('menu.how')}
            </button>
            <button 
              onClick={() => scrollToSection('print')}
              className="hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            >
              {t('menu.print')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-orange-600 transition-colors focus:outline-none focus:text-orange-600"
            >
              {t('menu.about')}
            </button>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-center py-32 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/homepage-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 drop-shadow">
            {t('subtitle')}
          </p>
          <button 
            onClick={() => scrollToSection('tracing')}
            className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('cta')}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="tracing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            {t('features.title', 'Practice Made Perfect')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.tracing.title', 'Letter Tracing')}</h3>
              <p className="text-gray-600">{t('features.tracing.description', 'Practice writing letters with guided tracing exercises.')}</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.words.title', 'Word Practice')}</h3>
              <p className="text-gray-600">{t('features.words.description', 'Build vocabulary while improving handwriting skills.')}</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖨️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.print.title', 'Print Ready')}</h3>
              <p className="text-gray-600">{t('features.print.description', 'Download and print worksheets for offline practice.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-20 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            {t('howItWorks.title', 'How It Works')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step1.title', 'Choose')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1.description', 'Select letters, words, or sentences to practice')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step2.title', 'Practice')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2.description', 'Trace and write using our guided exercises')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step3.title', 'Improve')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3.description', 'Watch your handwriting skills develop over time')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Print Section */}
      <section id="print" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            {t('printSection.title', 'Print & Practice Anywhere')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('printSection.description', 'Generate beautiful handwriting worksheets that you can print and use offline.')}
          </p>
          <button className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all shadow-lg">
            {t('printSection.cta', 'Create Worksheet')}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            {t('about.title', 'About Calligraphy Practice')}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('about.description', 'We believe that beautiful handwriting is a skill worth developing. Our platform provides engaging, interactive tools to help children and adults improve their penmanship through structured practice and fun exercises.')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 text-orange-400">{t('appName', 'Прописи')}</div>
          <p className="text-gray-400 mb-6">
            {t('footer.tagline', 'Making handwriting practice enjoyable and effective.')}
          </p>
          <div className="text-sm text-gray-500">
            © 2025 {t('appName', 'Прописи')}. {t('footer.rights', 'All rights reserved.')}
          </div>
        </div>
      </footer>
    </main>
  );
};
