import Section from './components/Section.vue'
import Class from './components/Class.vue'
import Share from './components/Share.vue'
import Care from './components/Care.vue'
import Me from './components/Me.vue'

export default[
	{
		path:'/',
		redirect:'/section'
	},
	{
		path:'*',
		redirect:'/section'
	},
	{
		path:'/section',
		component:Section
	},
	{
		path:'/class',
		component:Class
	},
	{
		path:'/share',
		component:Share
	},
	{
		path:'/care',
		component:Care
	},
	{
		path:'/me',
		component:Me
	}
]
