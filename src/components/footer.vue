<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section hide-on-mobile">
            <h3 class="footer-title">{{ $t('footer.about.title') }}</h3>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">{{ $t('footer.about.aboutUs') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.about.ourServices') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.about.privacyPolicy') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.about.terms') }}</a></li>
            </ul>
          </div>

          <div class="footer-section hide-on-mobile">
            <h3 class="footer-title">{{ $t('footer.help.title') }}</h3>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">{{ $t('footer.help.security') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.help.contact') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.help.siteMap') }}</a></li>
              <li><a href="#" class="footer-link">{{ $t('footer.help.regions') }}</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">{{ $t('footer.social.title') }}</h3>
            <div class="social-links">
              <a href="#" class="social-link">
                <div class="social-icon facebook">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span class="social-name">{{ $t('footer.social.facebook') }}</span>
              </a>
              <a href="#" class="social-link">
                <div class="social-icon twitter">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span class="social-name">{{ $t('footer.social.twitter') }}</span>
              </a>
              <a href="#" class="social-link">
                <div class="social-icon instagram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </div>
                <span class="social-name">{{ $t('footer.social.instagram') }}</span>
              </a>
              <a href="#" class="social-link">
                <div class="social-icon telegram">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <span class="social-name">{{ $t('footer.social.telegram') }}</span>
              </a>
            </div>
          </div>

          <div class="footer-section hide-on-mobile">
            <h3 class="footer-title">{{ $t('footer.mobileApps.title') }}</h3>
            <div class="app-links">
              <a href="#" class="app-button">
                <div class="app-button-content">
                  <svg class="app-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div class="app-text">
                    <span class="app-small">{{ $t('footer.mobileApps.appStore.download') }}</span>
                    <span class="app-large">{{ $t('footer.mobileApps.appStore.title') }}</span>
                  </div>
                </div>
              </a>
              <a href="#" class="app-button">
                <div class="app-button-content">
                  <svg class="app-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div class="app-text">
                    <span class="app-small">{{ $t('footer.mobileApps.googlePlay.download') }}</span>
                    <span class="app-large">{{ $t('footer.mobileApps.googlePlay.title') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom hide-on-mobile">
      <div class="container">
        <p class="copyright">{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.footer {
  background-color: #002f34;
  color: white;
  padding: 48px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-main {
  padding: 3rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: white;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 16px;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
}

.social-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.social-icon svg {
  width: 24px;
  height: 24px;
}

.social-name {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-link:hover .social-name {
  opacity: 1;
}

.facebook {
  background: linear-gradient(45deg, #1877f2, #3b5998);
  box-shadow: 0 4px 12px rgba(24, 119, 242, 0.3);
}

.twitter {
  background: linear-gradient(45deg, #1da1f2, #0d8ed9);
  box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
}

.instagram {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  box-shadow: 0 4px 12px rgba(220, 39, 67, 0.3);
}

.telegram {
  background: linear-gradient(45deg, #0088cc, #0099e6);
  box-shadow: 0 4px 12px rgba(0, 136, 204, 0.3);
}

.social-link:hover .social-icon {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.app-button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: white;
  transition: all 0.2s ease;
}

.app-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.app-button-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-icon {
  width: 24px;
  height: 24px;
}

.app-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.app-small {
  font-size: 0.7rem;
  opacity: 0.8;
}

.app-large {
  font-size: 1.1rem;
  font-weight: 500;
}

.app-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  padding: 1.5rem 0;
  background: rgba(0, 0, 0, 0.2);
}

.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 24px 0;
  }

  .hide-on-mobile {
    display: none;
  }

  .footer-content {
    display: flex;
    justify-content: center;
  }

  .footer-section {
    margin: 0;
    text-align: center;
  }

  .social-links {
    gap: 16px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-icon svg {
    width: 20px;
    height: 20px;
  }

  .footer-title {
    font-size: 20px;
    margin-bottom: 16px;
  }
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-section {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .app-links {
    justify-content: center;
  }
}
</style>
