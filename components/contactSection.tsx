import { siteConfig } from '@/config/site'
import { Card, CardBody, Link, Avatar, Button } from '@nextui-org/react'
import React from 'react'
import { DiscordIcon, EmailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from './icons'
import { DocumentTextIcon } from '@heroicons/react/24/solid'

const contactSection = () => {
  return (
    <section id="contact" className='h-[100vh] grid place-items-center'>
      <Card
        isBlurred
        radius="lg"
      >
        <CardBody className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
          <div className='flex flex-col gap-4'>
            <Avatar
              isBordered
              color="secondary"
              name={'Contact Card'}
              src={`/images/profile.jpeg`}
              className='w-48 h-48 m-4'
            />
            <div className='flex gap-8 justify-center'>
              <Button isIconOnly color="secondary" variant="faded" aria-label="Linkedin">
                <Link isExternal href={siteConfig.links.linkedin.url} aria-label="Linkedin">
                  <LinkedinIcon className="text-default-500" />
                </Link>
              </Button>
              <Button isIconOnly color="secondary" variant="faded" aria-label="Linkedin">
                <Link isExternal href={siteConfig.links.github.url} aria-label="Github">
                  <GithubIcon className="text-default-500" />
                </Link>
              </Button>
              <Button isIconOnly color="secondary" variant="faded" aria-label="Linkedin">
                <Link isExternal href={siteConfig.links.discord.url} aria-label="Discord">
                  <DiscordIcon className="text-default-500" />
                </Link>
              </Button>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <strong className='text-lg'>
              Wittawat Phumthong
            </strong>
            <span>
              Full-stack Developer
            </span>
            <span>
              Samutprakan, Thailand
            </span>
            <Link isExternal href={`mailto:${siteConfig.links.email.url}`} aria-label="Phone" className='text-current underline'>
              <EmailIcon className="text-default-500" />
              <span className='ml-4'>
                {siteConfig.links.email.url}
              </span>
            </Link>
            <Link isExternal href={`tel:${siteConfig.links.phone.url}`} aria-label="Phone" className='text-current underline'>
              <PhoneIcon className="h-6 w-6 text-default-500" />
              <span className='ml-4'>
                {siteConfig.links.phone.url}
              </span>
            </Link>
            <Link isExternal href={`tel:${siteConfig.links.resume.url}`} aria-label="Phone" className='text-current underline'>
              <DocumentTextIcon className="h-6 w-6 text-default-500" />
              <span className='ml-4'>
                Resume Link
              </span>
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

export default contactSection