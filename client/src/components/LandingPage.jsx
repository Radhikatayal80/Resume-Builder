import React from 'react'
import Template1 from './templates/Template1'
import Template2 from './templates/Template2'
import Template3 from './templates/Template3'

export default function LandingPage() {
    return (
        <div class="min-h-screen bg-gray-100">
            <header class="bg-white shadow">
                <div class="container mx-auto flex justify-between items-center py-4 px-6">
                    <div class="text-2xl font-bold text-purple-700">Jobseeker</div>
                    <nav class="flex space-x-4">
                        <a href="#" class="text-gray-700 hover:text-gray-900">Tools</a>
                        <a href="#" class="text-gray-700 hover:text-gray-900">Pricing</a>
                        <a href="#" class="text-gray-700 hover:text-gray-900">FAQ</a>
                        <button class="bg-purple-700 text-white px-4 py-2 rounded">Create resume</button>
                    </nav>
                </div>
            </header>

            <main class="container mx-auto py-16 ">
                <section class="text-center">
                    <h1 class="text-4xl font-bold mb-4">Create a professional resume</h1>
                    <p class="text-gray-600 mb-8">Fill in the blanks, choose a template, and download your resume instantly.</p>
                    <button class="bg-purple-700 text-white px-8 py-4 rounded text-lg">Create resume</button>
                </section>

                <section class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                    <div class="bg-white p-6 rounded shadow">
                        {/* <h2 class="text-xl font-bold mb-2">Daniel McAllister</h2>
                        <p class="text-gray-600 mb-4">Personal Details</p>
                        <ul class="text-gray-600">
                            <li>Name: Daniel McAllister</li>
                            <li>Email address: d.mcallister@gmail.com</li>
                            <li>Phone number: (450) 789-1234</li>
                            <li>Address: Missoula, MT</li>
                            <li>LinkedIn: linkedin.com/in/dmcallister</li>
                        </ul> */}
                        <Template1/>
                    </div>

                    <div class="bg-white p-6 rounded shadow">
                        <Template2/>
                    </div>

                    <div class="bg-white p-6 rounded shadow">
                        <Template3/>
                    </div>
                </section>
            </main>
        </div>

    )
}
