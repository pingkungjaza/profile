import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Avatar, Link } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { WORKS } from '@/config/constant';

const WorkSection = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState<string>()
  const [textColor, setTextColor] = useState<string>()

  useEffect(() => {
    setBgColor(theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(256,256,256,0.8)')
    setTextColor(theme === 'dark' ? 'rgba(256,256,256,0.8)' : 'rgba(0,0,0,0.8)')
  }, [theme])

  return (
    <section id="works" className='min-h-[100vh]'>
      <VerticalTimeline animate lineColor={bgColor}>
        {WORKS.map((work, index) =>
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