/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./application/views/**/*.{php,js,html}", // Semua file view CI3
		"./public/**/*.html", // Jika Anda memiliki file HTML statis
	],
	theme: {
		extend: {
			colors: {
				primary: "#eb5e28", // Warna utama, cocok untuk elemen utama seperti tombol aksi utama atau header.
				accent: {
					danger: "#EB3D28", // Warna aksen merah, digunakan untuk elemen penting seperti peringatan atau error.
					highlight: "#EB8128", // Warna aksen oranye, cocok untuk elemen yang ingin ditonjolkan seperti tombol sekunder.
					alert: "#EB2854", // Warna aksen pink kemerahan, cocok untuk notifikasi penting atau elemen interaktif.
					warning: "#EBA028", // Warna aksen emas, digunakan untuk peringatan ringan atau elemen informatif.
					muted: "#EB9776", // Warna aksen peach, baik untuk elemen pendukung seperti teks sekunder atau border.
				},
				background: "#252422", // Warna latar belakang, digunakan untuk seluruh area dasar aplikasi/website.
				white: "#ffffff", // Warna putih, digunakan untuk teks di atas elemen gelap atau latar.
			},
		},
	},
	plugins: [],
};
