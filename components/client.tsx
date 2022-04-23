import React, { FC } from 'react'
import ExperienceCard from './ExperienceCard'

interface Experience {
  companyName: string
  experience: {
    html: string
  }
  sectionTitle: string
  skills: string[]
}
interface ExperienceSection {
  sectionTitle: string
  sectionDescription: string
  experiences: Experience[]
}

const Client: FC<ExperienceSection> = ({ experienceSection }) => {
  const { sectionTitle, sectionDescription, experiences } = experienceSection[0]

  return (
    <div className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <section className="w-full">
        <h2 id="experience" className="secondary-title">
          {sectionTitle}
        </h2>
        <p className="section-paragraph">{sectionDescription}</p>

        <div className="my-16 space-y-12">
          {experiences.map((experience: Object, index: string) => (
            <ExperienceCard key={index} experienceData={experience} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Client
