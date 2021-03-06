import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ListIcon from '@mui/icons-material/List'
const navbar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search...' />
					<SearchIcon className='icon' />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageIcon className='icon' />
						English
					</div>
					<div className='item'>
						<DarkModeIcon className='icon' />
					</div>
					<div className='item'>
						<NotificationsNoneIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ChatBubbleOutlineIcon className='icon' />
						<div className='counter'>2</div>
					</div>
					<div className='item'>
						<ListIcon className='icon' />
					</div>
					<div className='item'>
						<img
							src='https://avatars.githubusercontent.com/u/36123431?v=4'
							alt='profileImage'
							className='avatar'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default navbar
