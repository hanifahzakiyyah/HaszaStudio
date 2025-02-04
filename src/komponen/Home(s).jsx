

export default function Home(){
    

    return (<>
        <section className="mb-10 bg-gradient-to-r from-grey-500 via-teal-300 to-green-500" >
            <h1 className="text-center font-bold text-8xl bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent">mari belajar tailwind</h1>
            
            <h2 className="text-center bg-gradient-to-r from-red-500 to-orange-300 p-10">Spacing</h2>
            <div className="m-20 bg-gradient-to-r from-green-500 to-purple-300">Margin</div>
            <div className="p-20 bg-gradient-to-br from-cyan-200 via-indigo-500  to-indigo-300">Padding</div>
            
            <h2 className="text-center">Sizing</h2>
            <div className="w-16 h-16 bg-gray-300">kotak 1</div>
            <div className="max-w-md h-16 bg-gray-300">kotak 2</div>
        </section>

        <section className="m-20 font-alata max-w-3xl mx-auto">
            <h2 className="mb-2 text-4xl font-bold capitalize" >mari semua belajar tailwind</h2>
            <p className="mb-4 text-lg">by Hanifah Zakiyyah</p>
            <p className="mb-4">Lorem, ipsum dolor sit amet <a href="" className="underline"> consectetur </a> adipisicing elit. Dolorum, eveniet alias ipsa minima officiis odio deleniti nostrum repellat error. Quas culpa minus vel dolorum fugiat reprehenderit labore tempora delectus molestias impedit suscipit, voluptates quasi ex dignissimos sint rerum obcaecati ratione aperiam incidunt quisquam! Hic ducimus architecto expedita adipisci, modi nam.</p>
            <blockquote className="mb-4 font-thin italic">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem esse omnis quo sint harum excepturi dolore id nam eligendi sapiente."</blockquote>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum excepturi magnam natus reprehenderit error dolore blanditiis! Ducimus similique, sunt, ut hic natus nemo eaque in architecto dolorum inventore sapiente.</p>
        </section>

        <section>
            <div className="max-w-xl h-96 bg-slate-600 m-auto bg-[url('https://picsum.photos/id/48/1000/600')] overflow-y-scroll bg-fixed" >
                <p className="p-5 text-2xl font-alata">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat beatae ipsam commodi blanditiis, necessitatibus quae architecto excepturi, cum porro provident dolorem? Laborum modi dolor voluptates delectus porro. Fugit at similique libero sunt iusto fuga officiis consectetur suscipit accusantium dolorum. Nobis itaque cupiditate consectetur sunt quis aliquid, atque, numquam quibusdam eius omnis laborum, accusamus repellat tempore ipsam a doloremque in repudiandae amet. Quidem quos consequatur ut, possimus omnis id hic! Aliquid rerum itaque nobis quos eius, debitis dolores eum a enim facere, ex expedita consequuntur veritatis tempora culpa possimus harum amet nostrum aliquam dignissimos cumque magni officia laborum! Cumque autem quasi voluptatibus, cupiditate ratione temporibus quidem. Perspiciatis veniam repellat placeat facere voluptatibus aliquid. Fugit at tempore, sequi quos corrupti, beatae, nam culpa tempora iure aspernatur commodi rem atque. Rem, temporibus distinctio? Illum enim commodi nesciunt dolorem, eligendi similique nam. Veniam deleniti placeat non? Ducimus veniam sunt modi molestias quo perferendis ipsum, labore dignissimos at, harum ullam! Vero assumenda sequi dolorum deserunt perspiciatis nihil, perferendis accusamus, sit eaque quos doloremque. Modi, accusantium voluptatem adipisci aspernatur quisquam eveniet ducimus quibusdam quod ratione quae alias, rem laborum fugit quasi asperiores mollitia non odio iusto maiores illo quidem perferendis ad. Itaque dolore dolorum aliquid.</p>
            </div>

            <div className="mt-10 bg-cyan-400 max-w-xl h-96 m-auto bg rounded-tr-[50%] rounded-bl-3xl border-[20px] border-indigo-300/10 border-double shadow-xl shadow-cyan-900 bg-[url('../l.webp')] bg-cover flex">
                <div className="w-80 h-56 bg-slate-200/20 m-auto backdrop-blur-md rounded-3xl shadow-xl"></div>
            </div>
        </section>

        <hr className="my-20"/>

        <section>
            <button className="px-5 py-2 bg-sky-500 text-white rounded-full m-auto block font-alata hover:bg-sky-600 active:bg-sky-800 focus:ring focus:ring-sky-200">Simpan</button>

            <div className="max-w-lg my-10 border border-slate-200 p-5 shadow-lg mx-auto rounded-xl font-alata hover:bg-sky-900 group">
                <h2 className="mb-3 text-slate-600 group-hover:text-slate-300">My Card</h2>
                <p className="text-slate-600 group-hover:text-slate-300 first-line:uppercase first-letter:text-7xl first-letter:float-left first-letter:mr-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur illum corrupti aspernatur sint? Iusto recusandae dolor incidunt repudiandae expedita unde tenetur consequuntur, vel aperiam itaque, tempora veritatis sunt voluptatem.</p>
            </div>

            <div className="max-w-lg my-10 border border-slate-200 p-5 shadow-lg mx-auto rounded-xl font-alata">
                <form action="">
                    <label htmlFor="email">
                        <p className="py-3 after:content-['*'] after:ml-0.5 after:text-pink-600" >Email</p>
                        <input className="w-full p-3 shadow rounded border focus:outline-none focus:outline-2 focus:outline-sky-500 peer" type="email" name="" id="email" placeholder="masukkan email.." />
                        <p className="ml-3 mt-1 text-sm text-pink-500 invisible peer-invalid:visible">email tidak valid</p>
                    </label>
                </form>
            </div>
        </section>

        <div className="mb-96"></div>
    </>)
}