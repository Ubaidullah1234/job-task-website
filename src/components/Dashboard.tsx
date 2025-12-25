import logo from '../assets/logo.png'
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'
import vector3 from '../assets/vector3.png'
import vector4 from '../assets/vector4.png'
import vector5 from '../assets/vector5.png'
import vector6 from '../assets/vector6.png'
import vector7 from '../assets/vector7.png'
import vector8 from '../assets/vector8.png'
import vector9 from '../assets/vector9.png'
import vector10 from '../assets/vector10.png'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import pink1 from '../assets/pink1.png'
import pink2 from '../assets/pink2.png'
import consoleImg from '../assets/console.png'
import play from '../assets/play.png'
import play2 from '../assets/play2.png'
import blueBottomImg from '../assets/console2.png'
import arr from '../assets/arr.png'
import arr2 from '../assets/arr2.png'
import person from '../assets/person.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import fb from '../assets/fb.png'
import twiter from '../assets/twiter.png'
import insta from '../assets/insta.png'
import utube from '../assets/utube.png'
import fb2 from '../assets/insta2.png'
import twiter2 from '../assets/twiter2.png'
import insta2 from '../assets/insta2.png'
import utube2 from '../assets/utube2.png'
import flag from '../assets/flag.png'

const Dashboard = () => {
  
  const designDimensions = {
    
    // Left side vectors
    vector1: {
      width: 173,
      height: 173,
      topFromNavbar: 120,
      left: 70,
    },
    vector2: {
      width: 141.7100067138672,
      height: 141.7100067138672,
      topFromNavbar: 240.64,
      left: 160.64,
    },
    vector3: {
      width: 226.92999267578125,
      height: 113.97000122070312,
      topFromNavbar: 420.51,
      left: 70,
    },
    vector4: {
      width: 175,
      height: 176,
      topFromNavbar: 500,
      left: 70,
    },
    vector5: {
      width: 58,
      height: 58,
      topFromNavbar: 255,
      left: 75,
    },
    
    // Right side vectors
    vector6: {
      width: 201.52000427246094,
      height: 126.33000183105469,
      topFromNavbar: 123.84,
      left: 1158.74,
    },
    vector7: {
      width: 169,
      height: 169,
      topFromNavbar: 184,
      left: 1067,
    },
    vector8: {
      width: 155,
      height: 153,
      topFromNavbar: 295,
      left: 1219,
    },
    vector9: {
      width: 230,
      height: 128,
      topFromNavbar: 396,
      left: 1089,
    },
    vector10: {
      width: 152,
      height: 153,
      topFromNavbar: 500,
      left: 1145,
    },
    
    // Button containers
    tryFreeContainer: {
      width: 209.92999267578125,
      height: 52,
      topFromNavbar: 500,
      left: 350,
      paddingTop: 14,
      paddingRight: 30.93,
      paddingBottom: 14,
      paddingLeft: 32,
      borderRadius: 6,
      borderWidth: 1,
    },
    
    appleContainer: {
      width: 62,
      height: 52,
      topFromNavbar: 580,
      left: 579.93,
      paddingTop: 10,
      paddingRight: 15,
      paddingBottom: 10,
      paddingLeft: 15,
      borderRadius: 6,
      borderWidth: 1,
    },
    
    googleContainer: {
      width: 62,
      height: 52,
      topFromNavbar: 580,
      left: 653.93,
      paddingTop: 10,
      paddingRight: 15,
      paddingBottom: 10,
      paddingLeft: 15,
      borderRadius: 6,
      borderWidth: 1,
    },
    
    // New text below buttons
    descriptionText: {
      width: 680,
      topFromNavbar: 580,
    },
    
    // Container with top border
    containerWithBorder: {
      width: 1180,
      height: 1519,
      topFromNavbar: 800,
      left: 80,
    },
    
    // First text container
    textContainer1: {
      width: 1200,
      height: 71.83999633789062,
      top: 101,
      left: -10,
      text: "What you get on Setapp.",
      fontFamily: "Avenir Next",
      fontWeight: 600,
      fontSize: 36,
      lineHeight: 51.84,
      letterSpacing: 1,
    },
    
    // Second text container - starts 600px from left of big container
    textContainer2: {
      width: 600,
      height: 71.83999633789062,
      top: 101,
      left: 600,
      text: "With a single monthly subscription at $9.99, you get 240+ apps for your Mac.",
      fontFamily: "Avenir Next",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
    },
    
    // Colored container after text
    coloredContainer: {
      width: 1180,
      height: 605,
      paddingTop: 60,
      borderRadius: 20,
      backgroundColor: '#DF96AE',
      marginTop: 60,
    },
    
    // Container inside pink area
    pinkInnerContainer: {
      width: 1180,
      height: 80,
      gap: 32,
      paddingRight: 552,
      paddingLeft: 60,
    },
    
    // pink1.png image
    pink1Image: {
      width: 80,
      height: 80,
    },
    
    // Text 1 inside pink container
    pinkText1: {
      text: "Keep your Mac clean",
      fontFamily: "Avenir Next",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 40.04,
      letterSpacing: 0,
      color: '#26262B',
    },
    
    // Text 2 inside pink container (vertically below text1)
    pinkText2: {
      text: "Remove junk, scan for malware, wipe email attachments",
      fontFamily: "Avenir Next",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
      color: '#26262B',
    },
    
    // pink2.png image
    pink2Image: {
      width: 1199,
      height: 490,
      maxWidth: 1106,
      marginTop: 40,
    },
    
    // Two containers after pink container
    // Container 1 (Beige)
    beigeContainer: {
      width: 580,
      height: 632.5999755859375,
      paddingBottom: 59.54,
      borderRadius: 20,
      backgroundColor: '#F4F0E4',
      marginTop: 40,
    },
    
    // Beige container top image
    beigeTopImage: {
      width: 580,
      height: 400.5199890136719,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    
    // Inner container in beige - UPDATED for vertical stacking
    beigeInnerContainer: {
      width: 580,
      height: 172.54000854492188,
      paddingLeft: 60,
      marginTop: 10,
    },
    
    // play.png image in beige
    playImage: {
      width: 80,
      height: 80,
    },
    
    // Text in beige container
    beigeText1: {
      text: "Write code",
      fontFamily: "Avenir Next",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 40.04,
      letterSpacing: 0,
      color: '#26262B',
      marginTop: 10, // Gap after play image
    },
    
    beigeText2: {
      text: "Create applications in more than 25 languages",
      fontFamily: "Avenir Next",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
      color: '#26262B',
      marginTop: 0, // Gap after first text
    },
    
    // Container 2 (Blue)
    blueContainer: {
      width: 580,
      height: 633,
      paddingTop: 60,
      borderRadius: 20,
      backgroundColor: '#384C75',
      marginTop: 40,
    },
    
    // Inner container in blue - UPDATED for vertical stacking
    blueInnerContainer: {
      width: 580,
      height: 160.54000854492188,
      paddingLeft: 60,
    },
    
    // play2.png image in blue
    play2Image: {
      width: 68,
      height: 68,
    },
    
    // Text in blue container
    blueText1: {
      text: "Join meetings in a click",
      fontFamily: "Avenir Next",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 40.04,
      letterSpacing: 0,
      color: '#FFFFFF',
      marginTop: 19, // Gap after play image
    },
    
    blueText2: {
      text: "Quickly access links to your meetings from menu bar",
      fontFamily: "Avenir Next",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
      color: '#FFFFFF',
      marginTop: 8, // Gap after first text
    },
    
    // Bottom image in blue container
    blueBottomImage: {
      width: 580,
      height: 360,
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    
    // Container for both (to arrange them side by side)
    twoContainersWrapper: {
      width: 1180,
      justifyContent: 'space-between',
      marginTop: 40,
    },
    
    // NEW: View all superpowers button
    viewAllSuperpowersContainer: {
      width: 267.6400146484375,
      height: 56,
      top: 2407, // From screen top
      left: '50%', // Changed to center horizontally
      borderRadius: 6,
      transform: 'translateX(-50%)', // Center it
    },
    
    // NEW: Right arrow inside button
    rightArrowContainer: {
      width: 27,
      height: 21,
      paddingTop: 2,
      paddingRight: 2.31,
      paddingBottom: 2,
      paddingLeft: 2,
    },
    
    // NEW: Setapp journey container
    setappJourneyContainer: {
      width: 1180,
      height: 156.83999633789062,
      top: 2559, // From screen top
      left: 80, // From screen left
      borderBottomWidth: 1,
      borderBottomColor: '#E5E5E5', // Added border color
    },
    
    // NEW: Setapp journey heading
    setappJourneyHeading: {
      text: "Your Setapp journey.",
      fontFamily: "Avenir Next",
      fontWeight: 600,
      fontSize: 36,
      lineHeight: 51.84,
      letterSpacing: 1,
      color: '#FFFFFF',
    },
    
    // NEW: Setapp journey description text
    setappJourneyDescription: {
      text: "Type in your task into Setapp search and get instant app recommendations.",
      fontFamily: "Avenir Next",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
      color: '#FFFFFF',
      left: 600, // 600px from left of the setappJourneyContainer
    },
    
    blackSquare: {
      width: 127.8125,
      height: 127.8125,
      topFromNavbar: 80.09,
      borderRadius: '20%',
    },
    logoContainer: {
      width: 60.001,
      height: 93.439,
    },
    mainTextContainer: {
      width: 680,
      height: 204.50999450683594,
      topFromNavbar: 260,
      paddingRight: 56.64,
      paddingLeft: 56.36,
      paddingBottom: 0.51,
    },
    typography: {
      fontSize: 50,
      lineHeight: 67.84,
      letterSpacing: 1,
    },
    
    // Description text typography
    descriptionTypography: {
      fontSize: 18,
      lineHeight: 32.04,
      letterSpacing: 0,
      fontWeight: 400,
    },
  };

  // Viewport calculation
 const getVW = (pxValue: number) => {
    return (pxValue / 14.4).toFixed(2) + 'vw';
  };

  // Fix: Add type annotation
  const getRightAlignedLeft = (pxValue: number) => {
    const fromRight = 1440 - pxValue;
    return `calc(100% - ${getVW(fromRight)})`;
  };


  return (
    <div className="relative bg-[#26262B] min-h-screen">
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[3500px] pt-[60px] md:pt-[70px] lg:pt-[80px]">
        
        {/* Left side vectors */}
        
        {/* Vector Container - Vectors 1 & 2 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector1.topFromNavbar),
            left: getVW(designDimensions.vector1.left),
          }}
        >
          <div style={{
            position: 'relative',
            width: getVW(designDimensions.vector1.width),
            height: getVW(designDimensions.vector1.height),
          }}>
            <img src={vector1} alt="Vector Graphic" className="w-full h-full object-contain" />
          </div>

          <div style={{
            position: 'absolute',
            top: `${((designDimensions.vector2.topFromNavbar - designDimensions.vector1.topFromNavbar) / designDimensions.vector1.height) * 100}%`,
            left: `${((designDimensions.vector2.left - designDimensions.vector1.left) / designDimensions.vector1.width) * 100}%`,
            width: getVW(designDimensions.vector2.width),
            height: getVW(designDimensions.vector2.height),
          }}>
            <img src={vector2} alt="Vector Graphic 2" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Vector 5 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector5.topFromNavbar),
            left: getVW(designDimensions.vector5.left),
            width: getVW(designDimensions.vector5.width),
            height: getVW(designDimensions.vector5.height),
          }}
        >
          <img src={vector5} alt="Vector Graphic 5" className="w-full h-full object-contain" />
        </div>

        {/* Vector 3 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector3.topFromNavbar),
            left: getVW(designDimensions.vector3.left),
            width: getVW(designDimensions.vector3.width),
            height: getVW(designDimensions.vector3.height),
          }}
        >
          <img src={vector3} alt="Vector Graphic 3" className="w-full h-full object-contain" />
        </div>

        {/* Vector 4 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector4.topFromNavbar),
            left: getVW(designDimensions.vector4.left),
            width: getVW(designDimensions.vector4.width),
            height: getVW(designDimensions.vector4.height),
          }}
        >
          <img src={vector4} alt="Vector Graphic 4" className="w-full h-full object-contain" />
        </div>

        {/* Right side vectors */}
        
        {/* Vector 6 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector6.topFromNavbar),
            left: getRightAlignedLeft(designDimensions.vector6.left),
            width: getVW(designDimensions.vector6.width),
            height: getVW(designDimensions.vector6.height),
          }}
        >
          <img src={vector6} alt="Vector Graphic 6" className="w-full h-full object-contain" />
        </div>

        {/* Vector 7 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector7.topFromNavbar),
            left: getRightAlignedLeft(designDimensions.vector7.left),
            width: getVW(designDimensions.vector7.width),
            height: getVW(designDimensions.vector7.height),
          }}
        >
          <img src={vector7} alt="Vector Graphic 7" className="w-full h-full object-contain" />
        </div>

        {/* Vector 9 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector9.topFromNavbar),
            left: getRightAlignedLeft(designDimensions.vector9.left),
            width: getVW(designDimensions.vector9.width),
            height: getVW(designDimensions.vector9.height),
            zIndex: 1,
          }}
        >
          <img src={vector9} alt="Vector Graphic 9" className="w-full h-full object-contain" />
        </div>

        {/* Vector 8 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector8.topFromNavbar),
            left: getRightAlignedLeft(designDimensions.vector8.left),
            width: getVW(designDimensions.vector8.width),
            height: getVW(designDimensions.vector8.height),
            zIndex: 2,
          }}
        >
          <img src={vector8} alt="Vector Graphic 8" className="w-full h-full object-contain" />
        </div>

        {/* Vector 10 */}
        <div 
          className="absolute"
          style={{
            top: getVW(designDimensions.vector10.topFromNavbar),
            left: getRightAlignedLeft(designDimensions.vector10.left),
            width: getVW(designDimensions.vector10.width),
            height: getVW(designDimensions.vector10.height),
          }}
        >
          <img src={vector10} alt="Vector Graphic 10" className="w-full h-full object-contain" />
        </div>

        {/* Black square */}
        <div 
          className="absolute bg-black rounded-[20%] left-1/2 transform -translate-x-1/2"
          style={{
            width: getVW(designDimensions.blackSquare.width),
            height: getVW(designDimensions.blackSquare.height),
            top: getVW(designDimensions.blackSquare.topFromNavbar),
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: getVW(designDimensions.logoContainer.width),
              height: getVW(designDimensions.logoContainer.height),
            }}
          >
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Main Text container */}
        <div 
          className="absolute text-white font-avenir font-bold text-center left-1/2 transform -translate-x-1/2"
          style={{
            top: getVW(designDimensions.mainTextContainer.topFromNavbar),
            width: getVW(designDimensions.mainTextContainer.width),
            height: getVW(designDimensions.mainTextContainer.height),
            maxWidth: '680px',
            paddingRight: getVW(designDimensions.mainTextContainer.paddingRight),
            paddingLeft: getVW(designDimensions.mainTextContainer.paddingLeft),
            paddingBottom: getVW(designDimensions.mainTextContainer.paddingBottom),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div 
            style={{ 
              fontFamily: '"Avenir Next", sans-serif',
              fontSize: getVW(designDimensions.typography.fontSize),
              lineHeight: getVW(designDimensions.typography.lineHeight),
              letterSpacing: getVW(designDimensions.typography.letterSpacing),
            }}
          >
            Dozens of apps.
            <br />
            One subscription.
            <br />
            $9.99
          </div>
        </div>

        {/* Button Container */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          style={{
            top: getVW(designDimensions.tryFreeContainer.topFromNavbar),
            gap: getVW(1),
          }}
        >
          {/* Try Free Button */}
          <div 
            className="flex items-center justify-center border border-white rounded-md bg-white"
            style={{
              width: getVW(designDimensions.tryFreeContainer.width),
              height: getVW(designDimensions.tryFreeContainer.height),
              paddingTop: getVW(designDimensions.tryFreeContainer.paddingTop),
              paddingRight: getVW(designDimensions.tryFreeContainer.paddingRight),
              paddingBottom: getVW(designDimensions.tryFreeContainer.paddingBottom),
              paddingLeft: getVW(designDimensions.tryFreeContainer.paddingLeft),
              borderRadius: getVW(designDimensions.tryFreeContainer.borderRadius),
              borderWidth: getVW(designDimensions.tryFreeContainer.borderWidth),
              marginRight: getVW(10),
            }}
          >
            <span 
              className="text-black text-center whitespace-nowrap"
              style={{
                fontFamily: '"Avenir Next", sans-serif',
                fontWeight: 400,
                fontSize: getVW(16),
                lineHeight: getVW(24),
                letterSpacing: getVW(1),
              }}
            >
              Try free for 7 days
            </span>
          </div>

          {/* Apple Store Button */}
          <div 
            className="flex items-center justify-center border border-white rounded-md bg-white"
            style={{
              width: getVW(designDimensions.appleContainer.width),
              height: getVW(designDimensions.appleContainer.height),
              paddingTop: getVW(designDimensions.appleContainer.paddingTop),
              paddingRight: getVW(designDimensions.appleContainer.paddingRight),
              paddingBottom: getVW(designDimensions.appleContainer.paddingBottom),
              paddingLeft: getVW(designDimensions.appleContainer.paddingLeft),
              borderRadius: getVW(designDimensions.appleContainer.borderRadius),
              borderWidth: getVW(designDimensions.appleContainer.borderWidth),
              marginRight: getVW(5),
            }}
          >
            <img 
              src={apple} 
              alt="Apple Store" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Google Play Button */}
          <div 
            className="flex items-center justify-center border border-white rounded-md bg-white"
            style={{
              width: getVW(designDimensions.googleContainer.width),
              height: getVW(designDimensions.googleContainer.height),
              paddingTop: getVW(designDimensions.googleContainer.paddingTop),
              paddingRight: getVW(designDimensions.googleContainer.paddingRight),
              paddingBottom: getVW(designDimensions.googleContainer.paddingBottom),
              paddingLeft: getVW(designDimensions.googleContainer.paddingLeft),
              borderRadius: getVW(designDimensions.googleContainer.borderRadius),
              borderWidth: getVW(designDimensions.googleContainer.borderWidth),
            }}
          >
            <img 
              src={google} 
              alt="Google Play" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Description Text - Centered below buttons */}
        <div 
          className="absolute text-white text-center left-1/2 transform -translate-x-1/2"
          style={{
            top: getVW(designDimensions.descriptionText.topFromNavbar),
            width: getVW(designDimensions.descriptionText.width),
            maxWidth: '680px',
          }}
        >
          <div 
            style={{ 
              fontFamily: '"Avenir Next", sans-serif',
              fontWeight: 400,
              fontSize: getVW(designDimensions.descriptionTypography.fontSize),
              lineHeight: getVW(designDimensions.descriptionTypography.lineHeight),
              letterSpacing: getVW(designDimensions.descriptionTypography.letterSpacing),
              color: '#FFFFFF',
            }}
          >
            Power up your workflow with Setapp, a<br />
            smart way to get apps.
          </div>
        </div>

        {/* Big Container with top border */}
        <div 
          className="absolute bg-[#26262B] border-t border-[#E5E5E5]"
          style={{
            top: getVW(designDimensions.containerWithBorder.topFromNavbar),
            left: getVW(designDimensions.containerWithBorder.left),
            width: getVW(designDimensions.containerWithBorder.width),
            height: getVW(designDimensions.containerWithBorder.height),
          }}
        >
          {/* First text: What you get on Setapp. */}
          <div 
            className="absolute text-white"
            style={{
              top: getVW(designDimensions.textContainer1.top),
              left: getVW(designDimensions.textContainer1.left),
              width: getVW(designDimensions.textContainer1.width),
              height: getVW(designDimensions.textContainer1.height),
              fontFamily: designDimensions.textContainer1.fontFamily,
              fontWeight: designDimensions.textContainer1.fontWeight,
              fontSize: getVW(designDimensions.textContainer1.fontSize),
              lineHeight: getVW(designDimensions.textContainer1.lineHeight),
              letterSpacing: getVW(designDimensions.textContainer1.letterSpacing),
              color: '#FFFFFF',
            }}
          >
            {designDimensions.textContainer1.text}
          </div>
          
          {/* Second text: starts 600px from left of big container */}
          <div 
            className="absolute text-white"
            style={{
              top: getVW(designDimensions.textContainer2.top),
              left: getVW(designDimensions.textContainer2.left),
              width: getVW(designDimensions.textContainer2.width),
              height: getVW(designDimensions.textContainer2.height),
              fontFamily: designDimensions.textContainer2.fontFamily,
              fontWeight: designDimensions.textContainer2.fontWeight,
              fontSize: getVW(designDimensions.textContainer2.fontSize),
              lineHeight: getVW(designDimensions.textContainer2.lineHeight),
              letterSpacing: getVW(designDimensions.textContainer2.letterSpacing),
              color: '#FFFFFF',
            }}
          >
            {designDimensions.textContainer2.text}
          </div>
          
          {/* Pink container after text */}
          <div 
            className="absolute rounded-[20px] bg-[#DF96AE] overflow-hidden"
            style={{
              top: getVW(designDimensions.textContainer1.top + designDimensions.textContainer1.height + designDimensions.coloredContainer.marginTop),
              left: getVW(0),
              width: getVW(designDimensions.coloredContainer.width),
              height: getVW(designDimensions.coloredContainer.height),
              paddingTop: getVW(designDimensions.coloredContainer.paddingTop),
            }}
          >
            {/* Container inside pink area */}
            <div 
              className="flex items-center"
              style={{
                width: getVW(designDimensions.pinkInnerContainer.width),
                height: getVW(designDimensions.pinkInnerContainer.height),
                gap: getVW(designDimensions.pinkInnerContainer.gap),
                paddingRight: getVW(designDimensions.pinkInnerContainer.paddingRight),
                paddingLeft: getVW(designDimensions.pinkInnerContainer.paddingLeft),
              }}
            >
              {/* pink1.png image */}
              <div 
                style={{
                  width: getVW(designDimensions.pink1Image.width),
                  height: getVW(designDimensions.pink1Image.height),
                  flexShrink: 0,
                }}
              >
                <img 
                  src={pink1} 
                  alt="Clean Mac" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Text container for both texts */}
              <div className="flex flex-col">
                {/* First text: Keep your Mac clean */}
                <div 
                  style={{
                    fontFamily: designDimensions.pinkText1.fontFamily,
                    fontWeight: designDimensions.pinkText1.fontWeight,
                    fontSize: getVW(designDimensions.pinkText1.fontSize),
                    lineHeight: getVW(designDimensions.pinkText1.lineHeight),
                    letterSpacing: getVW(designDimensions.pinkText1.letterSpacing),
                    color: designDimensions.pinkText1.color,
                  }}
                >
                  {designDimensions.pinkText1.text}
                </div>
                
                {/* Second text: Remove junk... */}
                <div 
                  style={{
                    fontFamily: designDimensions.pinkText2.fontFamily,
                    fontWeight: designDimensions.pinkText2.fontWeight,
                    fontSize: getVW(designDimensions.pinkText2.fontSize),
                    lineHeight: getVW(designDimensions.pinkText2.lineHeight),
                    letterSpacing: getVW(designDimensions.pinkText2.letterSpacing),
                    color: designDimensions.pinkText2.color,
                    marginTop: getVW(8),
                  }}
                >
                  {designDimensions.pinkText2.text}
                </div>
              </div>
            </div>
            
            {/* pink2.png image below the container */}
            <div 
              className="flex justify-center"
              style={{
                marginTop: getVW(designDimensions.pink2Image.marginTop),
                position: 'relative',
                bottom: 0,
              }}
            >
              <div 
                style={{
                  width: getVW(designDimensions.pink2Image.width),
                  height: getVW(designDimensions.pink2Image.height),
                  maxWidth: getVW(designDimensions.pink2Image.maxWidth),
                  maxHeight: `calc(${getVW(designDimensions.coloredContainer.height)} - ${getVW(designDimensions.coloredContainer.paddingTop)} - ${getVW(designDimensions.pinkInnerContainer.height)} - ${getVW(designDimensions.pink2Image.marginTop)})`,
                }}
              >
                <img 
                  src={pink2} 
                  alt="Mac Apps" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Two containers side by side after pink container */}
          <div 
            className="absolute flex justify-between"
            style={{
              top: getVW(
                designDimensions.textContainer1.top + 
                designDimensions.textContainer1.height + 
                designDimensions.coloredContainer.marginTop + 
                designDimensions.coloredContainer.height + 
                designDimensions.twoContainersWrapper.marginTop
              ),
              left: getVW(0),
              width: getVW(designDimensions.twoContainersWrapper.width),
            }}
          >
            {/* Beige Container (Left) */}
            <div 
              className="relative rounded-[20px]"
              style={{
                width: getVW(designDimensions.beigeContainer.width),
                height: getVW(designDimensions.beigeContainer.height),
                paddingBottom: getVW(designDimensions.beigeContainer.paddingBottom),
                backgroundColor: designDimensions.beigeContainer.backgroundColor,
              }}
            >
              {/* Top image in beige container - centered with gaps */}
              <div className="flex justify-center">
                <div 
                  style={{
                    width: `calc(${getVW(designDimensions.beigeTopImage.width)} - ${getVW(40)})`,
                    height: getVW(designDimensions.beigeTopImage.height),
                    marginTop: getVW(designDimensions.beigeTopImage.marginTop),
                  }}
                >
                  <img 
                    src={consoleImg} 
                    alt="Console" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Inner container in beige - VERTICAL STACKING: Play image, then Text 1, then Text 2 */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: getVW(designDimensions.beigeInnerContainer.width),
                  height: getVW(designDimensions.beigeInnerContainer.height),
                  paddingLeft: getVW(designDimensions.beigeInnerContainer.paddingLeft),
                  marginTop: getVW(designDimensions.beigeInnerContainer.marginTop),
                }}
              >
                {/* play.png image */}
                <div 
                  style={{
                    width: getVW(designDimensions.playImage.width),
                    height: getVW(designDimensions.playImage.height),
                  }}
                >
                  <img 
                    src={play} 
                    alt="Play" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Text 1: Write code */}
                <div 
                  style={{
                    fontFamily: designDimensions.beigeText1.fontFamily,
                    fontWeight: designDimensions.beigeText1.fontWeight,
                    fontSize: getVW(designDimensions.beigeText1.fontSize),
                    lineHeight: getVW(designDimensions.beigeText1.lineHeight),
                    letterSpacing: getVW(designDimensions.beigeText1.letterSpacing),
                    color: designDimensions.beigeText1.color,
                    marginTop: getVW(designDimensions.beigeText1.marginTop),
                  }}
                >
                  {designDimensions.beigeText1.text}
                </div>
                
                {/* Text 2: Create applications... */}
                <div 
                  style={{
                    fontFamily: designDimensions.beigeText2.fontFamily,
                    fontWeight: designDimensions.beigeText2.fontWeight,
                    fontSize: getVW(designDimensions.beigeText2.fontSize),
                    lineHeight: getVW(designDimensions.beigeText2.lineHeight),
                    letterSpacing: getVW(designDimensions.beigeText2.letterSpacing),
                    color: designDimensions.beigeText2.color,
                    marginTop: getVW(designDimensions.beigeText2.marginTop),
                  }}
                >
                  {designDimensions.beigeText2.text}
                </div>
              </div>
            </div>
            
            {/* Blue Container (Right) */}
            <div 
              className="relative rounded-[20px] overflow-hidden"
              style={{
                width: getVW(designDimensions.blueContainer.width),
                height: getVW(designDimensions.blueContainer.height),
                paddingTop: getVW(designDimensions.blueContainer.paddingTop),
                backgroundColor: designDimensions.blueContainer.backgroundColor,
              }}
            >
              {/* Inner container in blue - VERTICAL STACKING: Play2 image, then Text 1, then Text 2 */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: getVW(designDimensions.blueInnerContainer.width),
                  height: getVW(designDimensions.blueInnerContainer.height),
                  paddingLeft: getVW(designDimensions.blueInnerContainer.paddingLeft),
                }}
              >
                {/* play2.png image */}
                <div 
                  style={{
                    width: getVW(designDimensions.play2Image.width),
                    height: getVW(designDimensions.play2Image.height),
                  }}
                >
                  <img 
                    src={play2} 
                    alt="Play 2" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Text 1: Join meetings in a click */}
                <div 
                  style={{
                    fontFamily: designDimensions.blueText1.fontFamily,
                    fontWeight: designDimensions.blueText1.fontWeight,
                    fontSize: getVW(designDimensions.blueText1.fontSize),
                    lineHeight: getVW(designDimensions.blueText1.lineHeight),
                    letterSpacing: getVW(designDimensions.blueText1.letterSpacing),
                    color: designDimensions.blueText1.color,
                    marginTop: getVW(designDimensions.blueText1.marginTop),
                  }}
                >
                  {designDimensions.blueText1.text}
                </div>
                
                {/* Text 2: Quickly access links... */}
                <div 
                  style={{
                    fontFamily: designDimensions.blueText2.fontFamily,
                    fontWeight: designDimensions.blueText2.fontWeight,
                    fontSize: getVW(designDimensions.blueText2.fontSize),
                    lineHeight: getVW(designDimensions.blueText2.lineHeight),
                    letterSpacing: getVW(designDimensions.blueText2.letterSpacing),
                    color: designDimensions.blueText2.color,
                    marginTop: getVW(designDimensions.blueText2.marginTop),
                  }}
                >
                  {designDimensions.blueText2.text}
                </div>
              </div>
              
              {/* Bottom image in blue container - touching bottom, centered */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: getVW(designDimensions.blueBottomImage.width),
                  height: getVW(designDimensions.blueBottomImage.height),
                }}
              >
                <img 
                  src={blueBottomImg} 
                  alt="Blue Bottom" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* NEW: View all superpowers button - Added below the two containers */}
          <div 
            className="absolute flex items-center justify-center rounded-md"
            style={{
              top: getVW(designDimensions.viewAllSuperpowersContainer.top - designDimensions.containerWithBorder.topFromNavbar),
              left: '50%', // Center horizontally
              transform: 'translateX(-50%)', // Center it
              width: getVW(designDimensions.viewAllSuperpowersContainer.width),
              height: getVW(designDimensions.viewAllSuperpowersContainer.height),
              borderRadius: getVW(designDimensions.viewAllSuperpowersContainer.borderRadius),
              backgroundColor: 'transparent',
            }}
          >
            {/* Right arrow icon container */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: getVW(designDimensions.rightArrowContainer.width + 10), // Increased size
                height: getVW(designDimensions.rightArrowContainer.height + 5), // Increased size
                paddingTop: getVW(designDimensions.rightArrowContainer.paddingTop),
                paddingRight: getVW(designDimensions.rightArrowContainer.paddingRight),
                paddingBottom: getVW(designDimensions.rightArrowContainer.paddingBottom),
                paddingLeft: getVW(designDimensions.rightArrowContainer.paddingLeft),
                marginRight: getVW(10),
              }}
            >
              <span style={{ 
                color: '#FFFFFF', 
                fontSize: getVW(30), // Increased font size
                fontWeight: 'bold' 
              }}>
                →
              </span>
            </div>
            
            {/* View all superpowers text */}
            <span 
              style={{
                fontFamily: 'Avenir Next',
                fontWeight: 500,
                fontSize: getVW(20),
                lineHeight: getVW(30),
                letterSpacing: getVW(1.6),
                color: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              View all superpowers
            </span>
          </div>

          {/* NEW: Setapp journey container - Added below the button */}
          <div 
            className="absolute"
            style={{
              top: getVW(designDimensions.setappJourneyContainer.top - designDimensions.containerWithBorder.topFromNavbar),
              left: getVW(designDimensions.setappJourneyContainer.left - designDimensions.containerWithBorder.left),
              width: getVW(designDimensions.setappJourneyContainer.width),
              height: getVW(designDimensions.setappJourneyContainer.height),
              borderBottom: `${getVW(1)} solid #E5E5E5`, // Added border with color
            }}
          >
            {/* Main heading: Your Setapp journey. */}
            <div 
              className="absolute text-white"
              style={{
                top: getVW(0),
                left: getVW(0),
                fontFamily: designDimensions.setappJourneyHeading.fontFamily,
                fontWeight: designDimensions.setappJourneyHeading.fontWeight,
                fontSize: getVW(designDimensions.setappJourneyHeading.fontSize),
                lineHeight: getVW(designDimensions.setappJourneyHeading.lineHeight),
                letterSpacing: getVW(designDimensions.setappJourneyHeading.letterSpacing),
                color: designDimensions.setappJourneyHeading.color,
              }}
            >
              {designDimensions.setappJourneyHeading.text}
            </div>
            
            {/* Description text - starts 600px from left of this container */}
            <div 
              className="absolute text-white"
              style={{
                top: getVW(0),
                left: getVW(designDimensions.setappJourneyDescription.left),
                width: getVW(600),
                fontFamily: designDimensions.setappJourneyDescription.fontFamily,
                fontWeight: designDimensions.setappJourneyDescription.fontWeight,
                fontSize: getVW(designDimensions.setappJourneyDescription.fontSize),
                lineHeight: getVW(designDimensions.setappJourneyDescription.lineHeight),
                letterSpacing: getVW(designDimensions.setappJourneyDescription.letterSpacing),
                color: designDimensions.setappJourneyDescription.color,
              }}
            >
              {designDimensions.setappJourneyDescription.text}
            </div>
          </div>
        </div>
      </div>
   {/* Gradient section placed here */}
<div 
  className="absolute"
  style={{
    top: getVW(2850),
    width: '100%',
    height: getVW(822),
    background: 'linear-gradient(180deg, #26262B 0%, #26262B 50%, #FEFEFE 50%, #FEFEFE 100%)',
  }}
>
  {/* Purple container - CENTERED */}
  <div 
    className="absolute left-1/2 transform -translate-x-1/2"
    style={{
      width: getVW(1355),
      height: getVW(720),
      borderRadius: getVW(20),
      backgroundColor: '#765070',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Arrow buttons container - TOP RIGHT corner - ON TOP OF THE PURPLE CONTAINER */}
    <div 
      className="absolute flex"
      style={{
        top: getVW(60),
        right: getVW(60),
        gap: getVW(40),
        zIndex: 20,
      }}
    >
      {/* Left arrow button */}
      <button
        style={{
          width: getVW(15),
          height: getVW(15),
          borderRadius: '50%',
          backgroundColor: '#765070',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img 
          src={left} 
          alt="Left Arrow" 
          style={{
            width: getVW(24),
            height: getVW(24),
            filter: 'brightness(0) saturate(100%) invert(63%) sepia(4%) saturate(303%) hue-rotate(201deg) brightness(93%) contrast(84%)',
          }}
        />
      </button>
      
      {/* Right arrow button */}
      <button
        style={{
          width: getVW(15),
          height: getVW(15),
          borderRadius: '50%',
          backgroundColor: '#765070',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img 
          src={right} 
          alt="Right Arrow" 
          style={{
            width: getVW(24),
            height: getVW(24),
            filter: 'brightness(0) saturate(100%) invert(63%) sepia(4%) saturate(303%) hue-rotate(201deg) brightness(93%) contrast(84%)',
          }}
        />
      </button>
    </div>

    {/* Left side content container */}
    <div 
      className="absolute flex flex-col"
      style={{
        top: getVW(209),
        left: getVW(120),
        width: getVW(556),
        height: getVW(163.1199951171875),
        gap: getVW(20),
      }}
    >
      {/* Main text */}
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 500,
          fontSize: getVW(26),
          lineHeight: getVW(40.04),
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        Musicians like Jason use Setapp to push the
        limits of their creativity, dancing through tasks
        for more time to play.
      </div>
      
      {/* Jason Staczek text */}
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 400,
          fontSize: getVW(16),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        Jason Staczek
      </div>
    </div>
    
    {/* arr.png image container - positioned below the text, moved down a bit */}
    <div 
      className="absolute"
      style={{
        top: getVW(320 + 163.1199951171875 + 40),
        left: getVW(120),
        width: getVW(74),
        height: getVW(74),
        paddingTop: getVW(29.02),
        paddingRight: getVW(29.34),
        paddingBottom: getVW(29.02),
        paddingLeft: getVW(31.7),
        borderRadius: getVW(37),
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* arr.png image */}
      <img 
        src={arr} 
        alt="Arrow" 
        className="w-full h-full object-contain"
      />
      
      {/* arr2.png image positioned on top */}
      <div 
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: getVW(12.959975242614746),
          height: getVW(15.950767517089844),
        }}
      >
        <img 
          src={arr2} 
          alt="Small Arrow" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    
    {/* person.png image on RIGHT side */}
    <div 
      className="absolute"
      style={{
        right: getVW(60),
        bottom: getVW(0),
        width: getVW(670),
        height: getVW(690),
      }}
    >
      <img 
        src={person} 
        alt="Person" 
        className="w-full h-full object-contain"
      />
    </div>
    
  </div>
</div>
{/* Pagination container - placed after the gradient section */}
<div 
  className="absolute left-1/2 transform -translate-x-1/2 flex gap-[25px] justify-center items-center"
  style={{
    top: `calc(${getVW(2820)} + ${getVW(784.54)})`, // Top from previous linear container
    width: getVW(1395),
    height: getVW(12),

  }}
>
  {/* First dot - Black */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#000000', // Black
    }}
  />
  
  {/* Second dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
  
  {/* Third dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
  
  {/* Fourth dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
</div>
{/* White background container - full width */}
<div 
  className="absolute"
   style={{
    top: getVW(3672), // Start earlier than 3756 to cover gaps
    width: '100%',
    height: `calc(${getVW(746.52001953125)} + ${getVW(56)})`, // Add extra height
    backgroundColor: '#FFFFFF',
    paddingRight: getVW(330),
    left: 0,
    right: 0,
paddingTop: getVW(50),  }}
>
  {/* "Setapp in your words." text */}
  <div 
    style={{
      fontFamily: 'Avenir Next',
      fontWeight: 600,
      fontSize: getVW(30),
      lineHeight: getVW(47.88),
      letterSpacing: getVW(1.3),
      color: '#26262B',
      position: 'absolute',
      left: getVW(130),
      transform: 'translateY(-50%)',
    }}
  >
    Setapp in your words.
  </div>
  
  {/* "What you say about how Setapp powers you up." text */}
  <div 
    style={{
      fontFamily: 'Avenir Next',
      fontWeight: 400,
      fontSize: getVW(16),
      lineHeight: getVW(30.04),
      letterSpacing: '0%',
      color: '#26262B',
      position: 'absolute',
      left: `calc(${getVW(450)} + ${getVW(300)} + ${getVW(60)})`,
      transform: 'translateY(-50%)',
      width: getVW(250),
    }}
  >
    What you say about how Setapp powers you up.
  </div>

  {/* Social media icons container */}
  <div 
    style={{
      position: 'absolute',
      left: `calc(${getVW(410)} + ${getVW(300)} + ${getVW(60)} + ${getVW(300)} + ${getVW(40)})`,
      transform: 'translateY(-50%)',
      display: 'flex',
      gap: getVW(10),
      alignItems: 'center',
    }}
  >
    {/* Facebook icon */}
    <div style={{ width: getVW(48), height: getVW(48) }}>
      <img 
        src={fb} 
        alt="Facebook" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    
    {/* Twitter icon */}
    <div style={{ width: getVW(48), height: getVW(48) }}>
      <img 
        src={twiter} 
        alt="Twitter" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    
    {/* Instagram icon */}
    <div style={{ width: getVW(48), height: getVW(48) }}>
      <img 
        src={insta} 
        alt="Instagram" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    
    {/* YouTube icon */}
    <div style={{ width: getVW(48), height: getVW(48) }}>
      <img 
        src={utube} 
        alt="YouTube" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  </div>
</div>
{/* 3 containers horizontally below */}

{/* Left and right arrows between text and 3 containers */}
<div 
  style={{
    position: 'absolute',
    top: `calc(${getVW(3020)} + ${getVW(746.52001953125)} + ${getVW(20)})`, // Just below white container
    left: getVW(1226), // 1106px from left
    display: 'flex',
    gap: getVW(20),
    alignItems: 'center',
  }}
>
  {/* Left arrow */}
  <button
    style={{
      width: getVW(50),
      height: getVW(50),
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <img 
      src={left} 
      alt="Left Arrow" 
      style={{
        width: getVW(14),
        height: getVW(14),
        filter: 'brightness(0) saturate(100%) invert(63%) sepia(4%) saturate(303%) hue-rotate(201deg) brightness(93%) contrast(84%)',
      }}
    />
  </button>
  
  {/* Right arrow */}
  <button
    style={{
      width: getVW(50),
      height: getVW(50),
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    <img 
      src={right} 
      alt="Right Arrow" 
      style={{
        width: getVW(14),
        height: getVW(14),
        filter: 'brightness(0) saturate(100%) invert(63%) sepia(4%) saturate(303%) hue-rotate(201deg) brightness(93%) contrast(84%)',
      }}
    />
  </button>
</div>

{/* 3 containers horizontally below */}
{/* 3 containers horizontally below */}
<div 
  style={{
    position: 'absolute',
    top: `calc(${getVW(3050)} + ${getVW(746.52001953125)} + ${getVW(50)})`,
    left: getVW(130),
    display: 'flex',
    gap: getVW(30),
  }}
>
  {/* Container 1 - Original */}
  <div 
    style={{
      width: getVW(380),
      height: getVW(422.44000244140625),
      borderRadius: getVW(15),
      backgroundColor: '#F5F5F5',
      position: 'relative',
    }}
  >
    {/* Inner purple container */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(299.4800109863281),
        top: getVW(7),
        left: getVW(7),
        paddingTop: getVW(38.5),
        paddingRight: getVW(22),
        paddingBottom: getVW(38.98),
        paddingLeft: getVW(22),
        borderRadius: getVW(8),
        backgroundColor: '#71719A',
      }}
    >
      {/* Text inside purple container */}
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 500,
          fontSize: getVW(26),
          lineHeight: getVW(36.92),
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.
      </div>
    </div>
    
    {/* Bottom container with name and twitter */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(57.45000076293945),
        top: getVW(344.98),
        left: getVW(7),
        paddingRight: getVW(22),
        paddingLeft: getVW(22),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left side - Name and handle */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Name: Arash Pourhabibi */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(18),
            lineHeight: getVW(32.04),
            letterSpacing: '0%',
            color: '#26262B',
          }}
        >
          Arash Pourhabibi
        </div>
        
        {/* Twitter handle: @ArashPourhabibi */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(14),
            lineHeight: getVW(24.92),
            letterSpacing: '0%',
            color: '#9F9F9F',
          }}
        >
          @ArashPourhabibi
        </div>
      </div>
      
      {/* Right side - Twitter icon */}
      <div style={{ width: getVW(24), height: getVW(24) }}>
        <img 
          src={twiter} 
          alt="Twitter" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
  
  {/* Container 2 - #D9AE89 color with insta.png */}
  <div 
    style={{
      width: getVW(380),
      height: getVW(422.44000244140625),
      borderRadius: getVW(15),
      backgroundColor: '#F5F5F5',
      position: 'relative',
    }}
  >
    {/* Inner container - #D9AE89 color */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(299.4800109863281),
        top: getVW(7),
        left: getVW(7),
        paddingTop: getVW(38.5),
        paddingRight: getVW(22),
        paddingBottom: getVW(38.98),
        paddingLeft: getVW(22),
        borderRadius: getVW(8),
        backgroundColor: '#D9AE89',
      }}
    >
      {/* Text inside container - with line breaks */}
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 500,
          fontSize: getVW(26),
          lineHeight: getVW(36.92),
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        My favorites ❤️ from<br />
        @Setapp Ulysses,<br />
        CleanMyMac X, Paste,<br />
        MindNode, Swift<br />
        Publisher.
      </div>
    </div>
    
    {/* Bottom container with name and instagram */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(57.45000076293945),
        top: getVW(344.98),
        left: getVW(7),
        paddingRight: getVW(22),
        paddingLeft: getVW(22),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left side - Name and handle */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Name: Mauricio Sanchez */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(18),
            lineHeight: getVW(32.04),
            letterSpacing: '0%',
            color: '#26262B',
          }}
        >
          Mauricio Sanchez
        </div>
        
        {/* Instagram handle: @m741s */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(14),
            lineHeight: getVW(24.92),
            letterSpacing: '0%',
            color: '#9F9F9F',
          }}
        >
          @m741s
        </div>
      </div>
      
      {/* Right side - Instagram icon */}
      <div style={{ width: getVW(24), height: getVW(24) }}>
        <img 
          src={insta} 
          alt="Instagram" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
  
  {/* Container 3 - #765070 color with fb.png */}
  <div 
    style={{
      width: getVW(380),
      height: getVW(422.44000244140625),
      borderRadius: getVW(15),
      backgroundColor: '#F5F5F5',
      position: 'relative',
    }}
  >
    {/* Inner container - #765070 color */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(299.4800109863281),
        top: getVW(7),
        left: getVW(7),
        paddingTop: getVW(38.5),
        paddingRight: getVW(22),
        paddingBottom: getVW(38.98),
        paddingLeft: getVW(22),
        borderRadius: getVW(8),
        backgroundColor: '#765070',
      }}
    >
      {/* Text inside container - with line breaks */}
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 500,
          fontSize: getVW(26),
          lineHeight: getVW(36.92),
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        For those of you that<br />
        wonder where I<br />
        discover/get all the<br />
        awesome apps for my Mac<br />
        that I use, a lot of them are<br />
        from Setapp!
      </div>
    </div>
    
    {/* Bottom container with name and facebook */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(366),
        height: getVW(57.45000076293945),
        top: getVW(344.98),
        left: getVW(7),
        paddingRight: getVW(22),
        paddingLeft: getVW(22),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left side - Name and handle */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Name: Meredith Sweet */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(18),
            lineHeight: getVW(32.04),
            letterSpacing: '0%',
            color: '#26262B',
          }}
        >
          Meredith Sweet
        </div>
        
        {/* Instagram handle: @meredith.sweet.silberstein */}
        <div 
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 600,
            fontSize: getVW(14),
            lineHeight: getVW(24.92),
            letterSpacing: '0%',
            color: '#9F9F9F',
          }}
        >
          @meredith.sweet.silberstein
        </div>
      </div>
      
      {/* Right side - Facebook icon */}
      <div style={{ width: getVW(24), height: getVW(24) }}>
        <img 
          src={fb} 
          alt="Facebook" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>
</div>
<div 
  className="absolute left-1/2 transform -translate-x-1/2 flex gap-[25px] justify-center items-center"
  style={{
    top: `calc(${getVW(3520)} + ${getVW(784.54)})`, // Top from previous linear container
    width: getVW(1395),
    height: getVW(12),

  }}
>
  {/* First dot - Black */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#000000', // Black
    }}
  />
  
  {/* Second dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
  
  {/* Third dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
   <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
   <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
  
  {/* Fourth dot - #D5D4D4 */}
  <div 
    style={{
      width: getVW(12),
      height: getVW(12),
      borderRadius: getVW(6),
      backgroundColor: '#D5D4D4',
    }}
  />
</div>
{/* Bottom container with top border */}
<div 
  className="absolute"
  style={{
    top: getVW(4350),
    width: '100%',
    paddingRight: getVW(330),
    paddingLeft: getVW(330),
    borderTop: `1px solid #222222`, // Light black top border
    backgroundColor: '#FFFFFF',
  }}
  
>
  
{/* Gradient container */}

</div>
<div 
  className="absolute"
  style={{
    top: getVW(4410),
    width: '100%',
    height: getVW(650.5900268554688),
    paddingBottom: getVW(20),
    background: 'linear-gradient(180deg, #FEFEFE 0%, #FEFEFE 50%, #2B2D32 50%, #2B2D32 100%)',
  }}
>
  {/* Inner container */}
  <div 
    className="absolute left-1/2 transform -translate-x-1/2"
    style={{
      width: getVW(1330),
      height: getVW(587.5900268554688),
      paddingRight: getVW(290),
      paddingLeft: getVW(290),
      borderRadius: getVW(20),
      backgroundColor: '#F5F5F5',
      position: 'relative',
    }}
  >
    {/* Logo */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(76),
        height: getVW(120),
        top: getVW(124),
        left: getVW(100),
      }}
    >
      <img 
        src={logo} 
        alt="Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
    
    {/* Text container */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(1180),
        height: getVW(120.58999633789062),
        top: getVW(265),
        left: getVW(100),
        paddingRight: getVW(378),
        paddingBottom: getVW(0.59),
      }}
    >
      <div 
        style={{
          fontFamily: 'Avenir Next',
          fontWeight: 600,
          fontSize: getVW(46),
          lineHeight: getVW(59.8),
          letterSpacing: getVW(1.3),
          color: '#26262B',
          verticalAlign: 'middle',
        }}
      >
        Superpowers starting $9.99/month.<br />
        Free for 7 days.
      </div>
    </div>

    {/* Buttons container */}
    <div 
      style={{
        position: 'absolute',
        width: getVW(1180),
        height: getVW(50),
        top: getVW(445.59),
        left: getVW(100),
        paddingRight: getVW(741.52),
        display: 'flex',
        gap: getVW(24.5),
      }}
    >
      {/* Button 1: Get started now */}
      <button
        style={{
          width: getVW(193.41000366210938),
          height: getVW(50),
          paddingTop: getVW(13),
          paddingRight: getVW(31.41),
          paddingBottom: getVW(13),
          paddingLeft: getVW(31),
          borderRadius: getVW(6),
          backgroundColor: '#26262B',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 400,
            fontSize: getVW(16),
            lineHeight: getVW(24),
            letterSpacing: getVW(1),
            color: '#FFFFFF',
          }}
        >
          Get started now
        </span>
      </button>
      
      {/* Button 2: More about Setapp */}
      <button
        style={{
          width: getVW(220.57000732421875),
          height: getVW(50),
          paddingTop: getVW(13),
          paddingRight: getVW(31.57),
          paddingBottom: getVW(13),
          paddingLeft: getVW(31),
          borderRadius: getVW(6),
          backgroundColor: 'transparent',
          border: `${getVW(1)} solid #26262B`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Avenir Next',
            fontWeight: 400,
            fontSize: getVW(16),
            lineHeight: getVW(24),
            letterSpacing: getVW(1),
            color: '#26262B',
          }}
        >
          More about Setapp
        </span>
      </button>
    </div>
  </div>
</div>
<div 
  className="absolute left-1/2 transform -translate-x-1/2"
  style={{
    top: getVW(5059),
    width: '100%',
    height: getVW(629.8400268554688),
    backgroundColor: '#2B2D32',
    borderTop: `${getVW(1)} solid #E5E5E5`,
  }}
>
  {/* Move entire content up with margin-top */}
  <div style={{
    width: '100%',
    maxWidth: getVW(1440),
    height: '100%',
    margin: '0 auto',
    marginTop: getVW(-150), // Move content up
  }}>
    
    {/* Inner container - changed to column layout */}
    <div style={{
      width: '100%',
      height: getVW(700),
      paddingRight: getVW(30),
      paddingLeft: getVW(50),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: getVW(180),
      position: 'relative', // Added for absolute positioning
    }}>
      
      {/* Main content wrapper - this holds everything */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        
        {/* Logo and SETAPP text row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: getVW(20),
          marginBottom: getVW(20),
        }}>
          
          {/* Logo */}
          <div style={{ width: getVW(40), height: getVW(92) }}>
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          
          {/* SETAPP text */}
          <div style={{ width: getVW(70), height: getVW(14) }}>
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 600,
              fontSize: getVW(24),
              color: '#FFFFFF',
              lineHeight: '0.8',
            }}>
              SETAPP
            </span>
          </div>
          
        </div>
        
        {/* Right side 3-column container */}
        <div style={{
          position: 'absolute',
          top: getVW(200),
          right: getVW(30),
          width: getVW(690),
          height: getVW(325),
          display: 'flex',
          gap: getVW(0.5),
        }}>
          
          {/* Column 1 */}
          <div style={{
            width: getVW(230),
            height: getVW(325),
            paddingTop: getVW(0.5),
            paddingRight: getVW(93),
            paddingBottom: getVW(65),
            paddingLeft: getVW(10),
            display: 'flex',
            flexDirection: 'column',
            gap: getVW(8),
          }}>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Home</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>How It Works</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Pricing</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Setapp for Teams</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Blog</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Podcast</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Download</span>
            
          </div>
          
          {/* Column 2 */}
          <div style={{
            width: getVW(230),
            height: getVW(325),
            paddingTop: getVW(0.5),
            paddingRight: getVW(93),
            paddingBottom: getVW(65),
            paddingLeft: getVW(10),
            display: 'flex',
            flexDirection: 'column',
            gap: getVW(8),
          }}>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>About</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Support</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Education Discount</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Family Plan</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>For Developers</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Gift Cards</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Redeem Card or Code</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Setapp Reviews</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Affiliate Program</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Mac Developer Survey 2023</span>
            
          </div>
          
          {/* Column 3 */}
          <div style={{
            width: getVW(230),
            height: getVW(325),
            paddingTop: getVW(0.5),
            paddingRight: getVW(93),
            paddingBottom: getVW(65),
            paddingLeft: getVW(10),
            display: 'flex',
            flexDirection: 'column',
            gap: getVW(8),
          }}>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Getting started with Setapp</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Remote access to other Mac</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Fix macOS Ventura problems</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Best productivity apps</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Best YouTube downloaders</span>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(14),
              lineHeight: getVW(20),
              letterSpacing: '0%',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}>Uninstall apps</span>
            
          </div>
          
        </div>
        
        {/* New text: Updates from our team, written with love ❤️ */}
        <div style={{
          marginTop: getVW(40), 
          marginBottom: getVW(20),
        }}>
          <span style={{
            fontFamily: 'Avenir Next',
            fontWeight: 400,
            fontSize: getVW(16),
            lineHeight: getVW(28.48),
            letterSpacing: '0%',
            color: '#FFFFFF',
            verticalAlign: 'middle',
          }}>
            Updates from our team, written with love <span style={{ color: '#FFA500', marginLeft: getVW(4) }}>🧡</span>
          </span>
        </div>

        {/* Email input field container */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: getVW(40),
        }}>
          
          {/* Email input field */}
          <div style={{
            position: 'relative',
            width: getVW(440),
            height: getVW(50.22999954223633),
          }}>
            
            {/* Input field */}
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#404547',
                border: 'none',
                borderRadius: getVW(6),
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                paddingLeft: getVW(20),
                paddingRight: getVW(60),
                color: '#FFFFFF',
                fontFamily: 'Avenir Next',
                fontSize: getVW(16),
                outline: 'none',
              }}
            />
            
          </div>
          
          {/* Submit button with arrow */}
          <button
            style={{
              width: getVW(54),
              height: getVW(50.22999954223633),
              paddingTop: getVW(18.12),
              paddingRight: getVW(23),
              paddingBottom: getVW(18.11),
              paddingLeft: getVW(23),
              borderTopRightRadius: getVW(6),
              borderBottomRightRadius: getVW(6),
              border: `${getVW(1)} solid #FFFFFF`,
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: getVW(-1),
            }}
          >
            <span style={{
              color: '#1F1F1F',
              fontSize: getVW(18),
              fontWeight: 'bold',
            }}>
              →
            </span>
          </button>
          
        </div>

        {/* Spacer - pushes DMCA to bottom */}
        <div style={{ flex: 1, minHeight: getVW(100) }} />

        {/* DMCA / Protected container */}
        <div style={{
          display: 'flex',
          width: getVW(125.83999633789062),
          height: getVW(26),
          gap: getVW(1),
          marginBottom: getVW(40),
        }}>
          
          <div style={{
            width: getVW(41),
            height: getVW(26),
            backgroundColor: '#969799',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: getVW(11),
              lineHeight: getVW(26),
              letterSpacing: '0%',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}>
              DMCA
            </span>
          </div>
          
          <div style={{
            width: getVW(83.83999633789062),
            height: getVW(26),
            backgroundColor: '#404547',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'Arial',
              fontWeight: 700,
              fontSize: getVW(11),
              lineHeight: getVW(26),
              letterSpacing: '0%',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}>
              Protected
            </span>
          </div>
          
        </div>
        
        {/* Flag + English + Down Arrow - Right side aligned with DMCA */}
        <div style={{
          position: 'fixed',
          right: getVW(55),
          top: getVW(430), // Adjust this value to align with DMCA
          display: 'flex',
          alignItems: 'center',
          gap: getVW(8),
        }}>
          
          {/* Flag image */}
          <div style={{
            width: getVW(28),
            height: getVW(20.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img 
              src={flag} 
              alt="English" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain' 
              }}
            />
          </div>
          
          {/* English text */}
          <span style={{
            fontFamily: 'Avenir Next',
            fontWeight: 400,
            fontSize: getVW(16),
            lineHeight: getVW(28.48),
            letterSpacing: '0%',
            color: '#FFFFFF',
            verticalAlign: 'middle',
          }}>
            English
          </span>
          
          {/* Down arrow */}
          <span style={{
            color: '#FFFFFF',
            fontSize: getVW(12),
            marginLeft: getVW(4),
            transform: 'translateY(1px)',
          }}>
            ▼
          </span>
          
        </div>
        
        {/* New container with border top */}
        <div style={{
          width: getVW(1320),
          height: getVW(96.36000061035156),
          borderTop: `${getVW(1)} solid #E5E5E5`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: getVW(20),
          paddingBottom: getVW(20),
          
        }}>
          
          {/* Left side - Address and Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: getVW(8),
          }}>
            
            <span style={{
              fontFamily: 'Avenir Next',
              fontWeight: 400,
              fontSize: getVW(12),
              lineHeight: getVW(21.36),
              letterSpacing: '0%',
              color: '#FFFFFF',
            }}>
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </span>
            
            <div style={{
              display: 'flex',
              gap: getVW(20),
            }}>
              <span style={{
                fontFamily: 'Avenir Next',
                fontWeight: 400,
                fontSize: getVW(12),
                lineHeight: getVW(21.36),
                letterSpacing: '0%',
                color: '#969799',
                cursor: 'pointer',
              }}>
                Terms of Use
              </span>
              
              <span style={{
                fontFamily: 'Avenir Next',
                fontWeight: 400,
                fontSize: getVW(12),
                lineHeight: getVW(21.36),
                letterSpacing: '0%',
                color: '#969799',
                cursor: 'pointer',
              }}>
                Privacy Policy
              </span>
            </div>
            
          </div>
          
          {/* Right side - Social icons */}
          <div style={{
            display: 'flex',
            gap: getVW(20),
            alignItems: 'center',
          }}>
            
            <div style={{ width: getVW(24), height: getVW(24) }}>
              <img src={fb2} alt="Facebook" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            
            <div style={{ width: getVW(24), height: getVW(24) }}>
              <img src={twiter2} alt="Twitter" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            
            <div style={{ width: getVW(24), height: getVW(24) }}>
              <img src={insta2} alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            
            <div style={{ width: getVW(24), height: getVW(24) }}>
              <img src={utube2} alt="YouTube" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</div>
{/* This should come AFTER the gradient section */}
<div className="absolute inset-0 bg-[#26262B] -z-10" />

    </div>
  );
};

export default Dashboard;