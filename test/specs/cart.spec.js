import { driver, $, expect } from '@wdio/globals'

describe('FITUR LOGIN', function () {
	it('sebagai user saya ingin membuka halaman login', async function () {
		// selector pakai accessibility id
		await $('~View menu').click()

		// selector pakai xpath dengan elemen utama tidak memiliki id unique
		// pilih elemen bapak terdekat yang memiliki id unique
		// pilih anak dari bapak tersebut dengan menggunakan order selector dari xpath []
		// await $('//android.view.ViewGroup[@resource-id="com.saucelabs.mydemoapp.android:id/header"]/android.widget.ImageView[2]').click()

		await driver.pause(500)

		// scroll ke bawah
		await driver
			.action('pointer')
			.move({ y: 850, x: 250 })
			.down()
			.pause(100)
			.move({ y: 500, x: 250, duration: 200 })
			.up()
			.perform()

		// pilih berdasarkan text nya pakai UiSelector
		// await $(`android=new UiSelector().text("Log In")`).click()

		// pilih berdasarkan text nya pakai XPath
		await $('//*[@text="Log In"]').click()

		const loginPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
		await expect(loginPageTitle).toHaveText('Login')
	})

	it('login menggunakan username dan password yang valid', async function () {
		await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
		await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')
		await $('id=com.saucelabs.mydemoapp.android:id/loginBtn').click()

		const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
		await expect(productPageTitle).toHaveText('Products')
		await $('~Sauce Labs Backpack').click()
	})
	it.only('Fitur masukan ke keranjang', async function () {
		await $('~Sauce Labs Backpack').click()
		const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
		expect(productPageTitle).toHaveText('Sauce Labs Backpack')
		await $('~Blue color').click()
		await driver
		.action('pointer')
		.move({ y: 1700, x: 600 })
		.down()
		.pause(100)
		.move({ y: 1300, x: 600, duration: 200 })
		.up()
		.perform()
		await $('~Increase item quantity').click()
		await $('id=com.saucelabs.mydemoapp.android:id/cartBt').click()
		await $('id=com.saucelabs.mydemoapp.android:id/cartIV').click()
		const myCart = await $('id=com.saucelabs.mydemoapp.android:id/titleTV')
		await expect(myCart).toHaveText('Sauce Labs Backpack')
		const jumlahMyCart = await $('id=com.saucelabs.mydemoapp.android:id/noTV')
		await expect(jumlahMyCart).toHaveText('2');
	})
})