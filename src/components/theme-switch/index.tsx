import { ColorSwatch, Menu, ThemeIcon } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { RiPaletteLine } from '@remixicon/react'
import { useThemeContext } from '../providers/mantine-provider/theme-provider'
import { limeTheme, redTheme, tomatoTheme, violetTheme, yellowTheme } from '../providers/mantine-provider/themes'

function ThemeSwitch() {
	const { handleSetTheme } = useThemeContext()

	const themes = [
		{ label: 'Lime', scheme: limeTheme },
		{ label: 'Yellow', scheme: yellowTheme },
		{ label: 'Tomato', scheme: tomatoTheme },
		{ label: 'Red', scheme: redTheme },
		{ label: 'Violet', scheme: violetTheme },
	]

	return (
		<Menu withArrow shadow="md" width={200}>
			<Menu.Target>
				<ThemeIcon radius="xl" variant="light">
					<RiPaletteLine size={17} />
				</ThemeIcon>
			</Menu.Target>

			<Menu.Dropdown>
				{themes.map((theme) => {
					return (
						<Menu.Item
							key={randomId()}
							onClick={() => handleSetTheme(theme.scheme)}
							leftSection={<ColorSwatch color={`${theme.scheme[5]}`} size={20} />}
						>
							{theme.label}
						</Menu.Item>
					)
				})}
			</Menu.Dropdown>
		</Menu>
	)
}

export default ThemeSwitch