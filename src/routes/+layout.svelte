<script lang="ts">
	import '../app.pcss';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Home } from 'svelte-heros-v2';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper,
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Button
	} from 'flowbite-svelte';
	import { Cog, Folder } from 'svelte-heros-v2';
	import { sineIn } from 'svelte/easing';

	import { enhance } from '$app/forms';
	let drawerHidden: boolean = false;
	let toggleDrawer = () => {
		drawerHidden = !drawerHidden;
	};
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';

	export let data;

	let backdrop: boolean = false;
	let activateClickOutside = true;
	let breakPoint: number = 1024;
	let width: number;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
</script>

<svelte:window bind:innerWidth={width} />

<div class="relative px-8">
<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b" let:hidden let:toggle>
	<NavHamburger onClick={toggleDrawer} class="ml-3 lg:hidden" />
	<NavBrand href="/" class="lg:ml-64">
		<Cog />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
			My Website
		</span>
	</NavBrand>
	<!--<NavHamburger onClick={toggle} />-->
	<NavUl {hidden} {divClass} {ulClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/project">Projects</NavLi>
		<NavLi href="https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout"
			>GitHub</NavLi
		>
	</NavUl>

	<div class="flex items-center md:order-2">
		{#if !data.session}
			<a href="/login_logout">Sign in</a>
		{:else}
			<Avatar id="avatar-menu" />
			<Dropdown placement="bottom" triggeredBy="#avatar-menu">
				<DropdownHeader>
					<span class="block text-sm">{data.session.user.id}</span>
					<span class="block truncate text-sm font-medium">{data.session.user.email}</span>
				</DropdownHeader>
				<DropdownItem><a href="/user_profile">User profile</a></DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem>
					<form action="/login_logout?/logout" method="POST" use:enhance>
						<button type="submit">Sign out</button>
					</form>
				</DropdownItem>
			</Dropdown>
		{/if}
	</div>
</Navbar>
</div>
<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	id="sidebar"
>
	<div class=" flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="Home" href="/" on:click={toggleSide} active={activeUrl === `/`}>
					<svelte:fragment slot="icon">
						<Home />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="Projects"
					href="/project"
					{spanClass}
					on:click={toggleSide}
					active={activeUrl === '/project'}
				>
					<svelte:fragment slot="icon">
						<Folder />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<div class="flex px-4 mx-auto mt-24 w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>

<!--<Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    
	
      <div class="flex items-center md:order-2">
        {#if !data.session}
		      <a href="/login_logout">Sign in</a>
        {:else}
          <Avatar id="avatar-menu" />
          <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
        
          <Dropdown placement="bottom" triggeredBy="#avatar-menu">
            <DropdownHeader>
              <span class="block text-sm">{data.session.user.id}</span>
              <span class="block truncate text-sm font-medium">{data.session.user.email}</span>
            </DropdownHeader>
            <DropdownItem><a href="/user_profile">User profile</a></DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <form action="/login_logout?/logout" method="POST" use:enhance>
                  <button type="submit">Sign out</button>
              </form>
            </DropdownItem>
        </Dropdown>
      {/if}
    </div>
		
	
    
    <NavUl>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>

<slot /> -->
