import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Avatar, Link } from '@nextui-org/react';
import { useTheme } from 'next-themes';

const WorkSection = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState<string>()
  const [textColor, setTextColor] = useState<string>()
  const works = [
    {
      role: 'Full Stack Developer',
      company: 'Zwiz.ai',
      company_logo: 'images/company-logo/zwizai-logo.png',
      company_link: 'https://zwiz.ai',
      date: 'Jan 2023 - Present · 1 yr',
      skills: 'Figma (Software) · Jira · Jenkins · React.js · Node.js · Next.js · Express.js · Amazon Web Services (AWS) · PostgreSQL · TypeScript'
    },
    {
      role: 'Programmer',
      company: 'THAI KOITO COMPANY LIMITED',
      company_logo: 'images/company-logo/koito-logo.png',
      company_link: 'https://www.jobthai.com/th/company/52223',
      date: 'Feb 2021 - Dec 2022 · 1 yr 11 mos',
      skills: 'Oracle Database · ASP.NET MVC · Bootstrap · AngularJS · Angular · PL/SQL · Microsoft SQL Server · C# · TypeScript'
    },
    {
      role: 'Web Programmer',
      company: 'SE-EDUCATION Public Company Limited.',
      company_logo: 'images/company-logo/se-ed-logo.png',
      company_link: 'https://se-ed.com',
      date: 'Dec 2019 - Jan 2021 · 1 yr 2 mos',
      skills: 'jQuery · Microsoft SQL Server · JavaScript · C# · .NET Framework'
    }
  ]

  useEffect(() => {
    setBgColor(theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(256,256,256,0.8)')
    setTextColor(theme === 'dark' ? 'rgba(256,256,256,0.8)' : 'rgba(0,0,0,0.8)')
  }, [theme])

  return (
    <section id="works" className='h-[100vh]'>
      <VerticalTimeline animate lineColor={bgColor}>
        {works.map((work, index) =>
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: textColor, boxShadow: 'none', borderRadius: 'var(--nextui-radius-large)' }}
            contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            iconStyle={{ background: bgColor, color: textColor, boxShadow: `0 0 0 4px ${bgColor}` }}
            icon={<Avatar src={work.company_logo} style={{ width: '100%', height: '100%' }} />}
            date={work.date}
            visible
          >
            <h3 className="vertical-timeline-element-title font-bold text-lg">
              {work.role}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Link href={work.company_link} isExternal showAnchorIcon className='text-default-700'>
                @ {work.company}
              </Link>
            </h4>
            <p>
              Skills: {work.skills}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </section>
  )
}

export default WorkSection