import logo from '../assets/logo.png'
import flag from '../assets/flag.png'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    'How it works',
    'All apps', 
    'Pricing',
    'For Teams',
    'Blog',
    'Podcast'
  ]

  // Calculate responsive values based on 1440px design
  const responsive = {
    // Font sizes scaled from 1440px design
    navItem: {
      base: '12px',      // ~14px on 1440px scaled down
      md: '13px',        // ~15px
      lg: '14px'         // Original design size
    },
    // Spacing scaled from 1440px design
    spacing: {
      navGap: {
        base: '12px',    // Reduced for mobile
        md: '16px',      // Medium screens
        lg: '20px'       // Desktop/Large (matches 1440px design)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#26262B]">
      {/* Main header container with responsive padding */}
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px]">
          
          {/* Logo - Left */}
          <div className="flex items-center space-x-3">
            {/* Logo size based on 1440px design */}
            <div className="w-6 h-9 md:w-7 md:h-10 lg:w-8 lg:h-12">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Brand name - visible only on mobile */}
            <h1 className="text-sm md:text-base lg:text-lg font-bold text-white md:hidden">
              
            </h1>
          </div>

          {/* Everything on Right Side */}
          <div className="flex items-center">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="ml-4 md:ml-5 lg:ml-6 xl:ml-7"
                  style={{
                    marginLeft: `clamp(${responsive.spacing.navGap.base}, 2vw, ${responsive.spacing.navGap.lg})`
                  }}
                >
                  <button
                    className="text-white hover:opacity-80 transition-opacity whitespace-nowrap"
                    style={{
                      fontFamily: '"Avenir Next", sans-serif',
                      fontWeight: 500,
                      fontSize: `clamp(${responsive.navItem.base}, 1vw, ${responsive.navItem.lg})`,
                      lineHeight: '1.5',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {item}
                  </button>
                </div>
              ))}
              
              {/* Separator */}
              <div 
                className="ml-4 md:ml-5 lg:ml-6 xl:ml-7"
                style={{
                  marginLeft: `clamp(${responsive.spacing.navGap.base}, 2vw, ${responsive.spacing.navGap.lg})`
                }}
              >
                <div className="w-px h-5 md:h-6 bg-white/50"></div>
              </div>
              
              {/* Flag */}
              <div 
                className="ml-4 md:ml-5 lg:ml-6 xl:ml-7 flex items-center"
                style={{
                  marginLeft: `clamp(${responsive.spacing.navGap.base}, 2vw, ${responsive.spacing.navGap.lg})`
                }}
              >
                <div className="w-5 h-4 md:w-6 md:h-5">
                  <img 
                    src={flag} 
                    alt="US Flag" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Sign In */}
              <div 
                className="ml-4 md:ml-5 lg:ml-6 xl:ml-7"
                style={{
                  marginLeft: `clamp(${responsive.spacing.navGap.base}, 2vw, ${responsive.spacing.navGap.lg})`
                }}
              >
                <button
                  className="text-white hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: '"Avenir Next", sans-serif',
                    fontWeight: 500,
                    fontSize: `clamp(${responsive.navItem.base}, 1vw, ${responsive.navItem.lg})`,
                    lineHeight: '1.5',
                    letterSpacing: '0.03em',
                  }}
                >
                  Sign In
                </button>
              </div>

              {/* Try Free Button */}
              <div 
                className="ml-4 md:ml-5 lg:ml-6 xl:ml-7"
                style={{
                  marginLeft: `clamp(${responsive.spacing.navGap.base}, 2vw, ${responsive.spacing.navGap.lg})`
                }}
              >
                <button
                  className="border border-white rounded-lg hover:bg-white/10 transition-colors"
                  style={{
                    fontFamily: '"Avenir Next", sans-serif',
                    fontWeight: 400,
                    fontSize: `clamp(12px, 1vw, 14px)`,
                    letterSpacing: '0.05em',
                    padding: 'clamp(6px 12px, 1vw, 8px 16px)',
                    minWidth: 'clamp(80px, 8vw, 100px)',
                    height: 'clamp(28px, 3vw, 32px)',
                    color:'#FFFFFF',
                  }}
                >
                  Try free
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-4 p-2 rounded hover:bg-[#3A3A40] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-gray-300"></div>
                <div className="w-5 h-0.5 bg-gray-300"></div>
                <div className="w-5 h-0.5 bg-gray-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2D2D33] px-4 pb-4">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left text-white px-4 py-3 rounded-lg hover:bg-[#3A3A40] transition-colors"
                style={{
                  fontFamily: '"Avenir Next", sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.02em',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            
            <div className="flex items-center justify-between px-4 py-3 mt-2">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-5">
                  <img 
                    src={flag} 
                    alt="US Flag" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <button 
                  className="text-white"
                  style={{
                    fontFamily: '"Avenir Next", sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    letterSpacing: '0.02em',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </button>
              </div>
              
              <button
                className="border border-white rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
                style={{
                  fontFamily: '"Avenir Next", sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header