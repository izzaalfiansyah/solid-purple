import {
	FiDelete,
	FiEdit,
	FiHome,
	FiLogOut,
	FiMenu,
	FiSettings,
	FiUser,
	FiUsers,
} from 'solid-icons/fi';
import { createSignal, For, Show } from 'solid-js';

export default () => {
	const [sidebarOpen, setSidebarOpen] = createSignal(true);

	const menus = [
		{
			path: '/',
			icon: FiHome,
			title: 'Home',
		},
		{
			path: '/user',
			icon: FiUsers,
			title: 'Data User',
		},
		{
			path: '/akun',
			icon: FiUser,
			title: 'Akun Saya',
		},
		{
			path: '/setting',
			icon: FiSettings,
			title: 'Pengaturan',
		},
	];

	function toggleSidebar() {
		setSidebarOpen(!sidebarOpen());
	}

	return (
		<div class="min-h-screen bg-gray-50 text-gray-700 text-sm">
			<div
				class="fixed top-0 left-0 bottom-0 w-64 bg-primary z-20 py-8 rounded-r-2xl transition lg:translate-x-0 -translate-x-64"
				classList={{ '!translate-x-0': sidebarOpen() }}
			>
				<div class="flex items-center mb-12 px-8">
					<div class="bg-pink-500 rounded-full flex items-center justify-center text-white h-10 w-10 shadow">
						<div class="font-bold text-2xl">L</div>
					</div>
					<div class="ml-3 text-white text-xl font-bold">Logo</div>
				</div>
				<div class="text-white uppercase font-semibold text-sm px-8">Main Menu</div>
				<div class="mt-8 px-4">
					<For each={menus}>
						{(item) => (
							<a
								href="/"
								class="flex items-center mb-0 px-5 rounded-full p-4 hover:bg-pink-500 hover:shadow-lg transition"
							>
								<div class="flex items-center justify-center mr-3">
									<item.icon class="stroke-white" />
								</div>
								<div class="text-white">{item.title}</div>
							</a>
						)}
					</For>
				</div>
			</div>
			<Show when={sidebarOpen()}>
				<div
					onClick={toggleSidebar}
					class="fixed top-0 left-0 right-0 bottom-0 z-[19] bg-black bg-opacity-25"
				></div>
			</Show>
			<div class="lg:pl-64">
				<div class="h-20 flex items-center shadow-lg bg-white px-6 justify-between">
					<a href="#logout" onClick={toggleSidebar} class="lg:hidden">
						<FiMenu class="h-5 w-5 stroke-gray-500" />
					</a>
					<div class="text-lg font-semibold text-pink-500">Solid Purple</div>
					<div class="flex items-center justify-end">
						<a href="#logout">
							<FiLogOut class="h-5 w-5 stroke-gray-500" />
						</a>
					</div>
				</div>
				<div class="p-6">
					<div class="flex">
						<div class="w-full lg:w-1/2">
							<div class="shadow-lg bg-white p-6 mb-6 rounded-lg">
								<div class="text-2xl">
									Selamat Datang <span class="font-semibold text-pink-500">Alfiansyah</span>!
								</div>
								<div>Semoga hari anda menyenangkan!</div>
							</div>
						</div>
					</div>
					<div class="shadow-lg bg-white rounded-lg p-6">
						<div class="overflow-x-auto">
							<table class="w-full whitespace-nowrap">
								<thead>
									<tr class="border-b border-gray-100">
										<th class="text-left p-3">Username</th>
										<th class="text-left p-3">Password</th>
										<th class="text-left p-3">Nama</th>
										<th class="text-left p-3">Role</th>
										<th class="text-left p-3"></th>
									</tr>
								</thead>
								<tbody>
									<tr class="border-b border-gray-100">
										<td class="px-3 p-5">izzaalfiansyah</td>
										<td class="px-3 p-5">1234</td>
										<td class="px-3 p-5">Muhammad Izza Alfiansyah</td>
										<td class="px-3 p-5">Admin</td>
										<td class="px-3 p-5">
											<div class="flex items-center">
												<FiEdit class="mr-3 stroke-blue-500" />
												<FiDelete class="stroke-red-500" />
											</div>
										</td>
									</tr>
									<tr class="border-b border-gray-100">
										<td class="px-3 p-5">raflyazzuhri</td>
										<td class="px-3 p-5">1234</td>
										<td class="px-3 p-5">Mohammad Rafly Azzuhri</td>
										<td class="px-3 p-5">General</td>
										<td class="px-3 p-5">
											<div class="flex items-center">
												<FiEdit class="mr-3 stroke-blue-500" />
												<FiDelete class="stroke-red-500" />
											</div>
										</td>
									</tr>
									<tr class="border-b border-gray-100">
										<td class="px-3 p-5">rickymahbubi</td>
										<td class="px-3 p-5">1234</td>
										<td class="px-3 p-5">Ricky Ahmad Mahbubi</td>
										<td class="px-3 p-5">General</td>
										<td class="px-3 p-5">
											<div class="flex items-center">
												<FiEdit class="mr-3 stroke-blue-500" />
												<FiDelete class="stroke-red-500" />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
