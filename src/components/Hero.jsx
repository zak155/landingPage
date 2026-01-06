import Section from "./Section"
import {curve} from "../assets"
import {farmer} from "../assets"
import Button from "./Button"
import CompanyLogos from "./CompanyLogos"

const Hero = () => {
  return (
    <Section 
       className="pt-[12rem] -mt-[5.25rem]"
       crosses 
       crossesOffset="lg:translate-y-[5.25rem]"
       customPaddings
       id="hero"
    >
        <div className="container relative">
          <div 
            className="relative z-1 max-w-[62rem] mx-auto
            text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
          >
            <h1 className="h1 mb-6">
                Smart Animal Health Assistant, Powered by AI<br/>
            <span className="inline-block relative">
                AfriVet
                <img
                  src={curve}
                  className="absolute top-full left-0
                  w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
            </span>
            
            </h1>
            <p className="body-1 max-w-3xl mx-auto">AfriVet AI stands beside Ethiopian farmers with trusted guidance when livestock health matters most.
“እንስሳት ጤናማ እንዲሆኑ የነፍስወከፍ ድርሻ ይጠይቃል” — When animals are healthy, families thrive.</p>
       
       <Button href="/pricing" white>
        Get Started
       </Button>
          </div>
          <div className="relative max-w-[18rem] mx-auto md:max-w-[32rem] xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 
                rounded-t-[0.9rem] "/>
               
                   <div className="rounded-b-[0.9rem] 
                   overflow-hidden md:aspect-[688/490]">
                     <img
                       src={farmer}
                       className="w-full h-auto block"
                       width={1200}
                       height={1100}
                     />
                   </div>

              </div>
            </div>
             

          </div>
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
        </div>

    </Section>
  )
}

export default Hero