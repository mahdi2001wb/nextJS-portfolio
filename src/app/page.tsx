import { About } from '@components/sections/about'
import { Contact } from '@components/sections/contact'
import { Experience } from '@components/sections/experience'
import { Hero } from '@components/sections/hero'
import { Projects } from '@components/sections/projects'
import { Skills } from '@components/sections/skills'
import { projects } from '@shared/cv'
export default async function Home() {
	return (
		<div className='container mx-auto px-4'>
			<Hero />
			<About />
			<Experience />
			<Skills />
			<Projects projects={projects} />
			<Contact />
		</div>
	)
}
