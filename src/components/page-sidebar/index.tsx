import { Accordion } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'
import useSidebarMap from './hooks'
import './css/style.css'

function PageSideBar() {
	const sidebarMap = useSidebarMap()
	const { pathname } = useLocation()

	return (
		<Accordion defaultValue={sidebarMap[0].title} className="mt-2 sidebar-accordion">
			{sidebarMap.map((acc) => {
				return (
					<Accordion.Item key={randomId()} value={acc.title}>
						<Accordion.Control icon={acc.icon}>{acc.title}</Accordion.Control>
						{acc.items.map((item) => {
							return (
								<NavLink to={item.path} key={randomId()}>
									<Accordion.Panel
										classNames={{ content: '!p-2' }}
										className={clsx(
											{ 'ml-2 border-l-2 border-[var(--mantine-color-color-filled)]': true },
											{
												'bg-[var(--mantine-color-color-light)]': pathname.includes(item.path),
											}
										)}
									>
										{item.innerText}
									</Accordion.Panel>
								</NavLink>
							)
						})}
					</Accordion.Item>
				)
			})}
		</Accordion>
	)
}

export default PageSideBar