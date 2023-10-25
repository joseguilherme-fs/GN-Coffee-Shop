export default function Footer() {
    return (
        <footer id="Sobre" className="w-full bg-[#494646]">
        <div className="container flex px-16 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-black">Sobre</h3>
                <p id="texto" className="py-4 text-white">
                  No coração da cidade, o GN Coffee Shop, criado pelos universitários José Guilherme e Nirielly Brito, é mais do que uma simples cafeteria. É um aconchegante refúgio onde a vida acadêmica encontra a agitação urbana, unindo sonhos ao aroma do café fresco.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-20">
              <div className="px-3 md:px-0">
                <h3 className="text-left sm:text-center md:px-3 font-bold text-black">Redes</h3>
                <div className="w-full flex items-center py-4 mt-0">
                  <a href="#" className="mx-2">
                    <i className="w-6 h-6 text-2xl text-[#e7e4e4] sm:text-center hover:text-black fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="w-6 h-6 text-2xl text-[#e7e4e4] sm:text-center hover:text-black  fa-brands fa-whatsapp" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="w-6 h-6 text-2xl text-[#e7e4e4] sm:text-center hover:text-black fa-brands fa-instagram" />
                  </a>
            
                </div>
              </div>
            </div>
            <div className="px-3 md:px-0">
              <h3 className="text-left font-bold text-black">Localização</h3>
              <p id="texto" className="py-4 text-white">
                Av. Primeiro de Maio, 720 - Jaguaribe, João Pessoa - PB, 58015-435
              </p>
            </div>
          </div>
        </div>
      </footer>
      
    )
}