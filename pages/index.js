import Navbar3 from '@/components/Navbar'
import React from 'react'
import Hero2  from '@/components/Hero2'
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import { BackgroundGradient } from "@/components/BackgroundGradient";
// OR adjust the path according to your folder structure


const index = () => {
  return (
    <div className='overflow-auto'>
     <Navbar3/>
     <Hero2/>
     <FeaturesSectionDemo/>
     <BackgroundGradient/>
     

    </div>
  )
}

export default index