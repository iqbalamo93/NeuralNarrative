import './Projectscard.css'

export default function ProjectsCard() {
    return (
    <div className='popular-articles' id='project'>
        
        <div className='popular-header header-card'>
            <h2 class="header-card-title">
            Explore<br/>Discover <br/><p>Peruse</p>
            </h2>
            <p className='tagline'>Scroll Right to View My Projects</p>
        </div>

        

        <section class="card-list">
            <article class="card-proj">
                <header class="card-header">
                <p>Jan 08th 2024</p>
                <a href="https://html-triscope.streamlit.app/"><h2>HTML TriScope</h2></a>
                <p>Rapid Answers from Triple Web Sources</p>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="./src/components/img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">LLM</a>
                <a href="#">Langchain</a>
                <a href="#">streamlit</a>
                </div>


            </article>



            <article class="card-proj">
                <header class="card-header">
                <p>Jan 09th 2024</p>
                <h2>Youtube summarizer!</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="./src/components/img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">RAG</a>
                <a href="#">LLM</a>
                </div>
            </article>




            <article class="card-proj">
                <header class="card-header">
                <p>Sep 11th 2023</p>
                <h2>Tabular data Info extractor</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">LLM</a>
                <a href="#">RAG</a>
                </div>
            </article>

            <article class="card-proj">
                <header class="card-header">
                <p>Jan 11th 2024</p>
                <h2>Fine tune LLm: Coming Soon</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                </div>
            </article>


            <article class="card-proj">
                <header class="card-header">
                <p>Feb 11th 2024</p>
                <h2>Remove Background: Coming soon</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                </div>
            </article>

            <article class="card-proj">
                <header class="card-header">
                <p>Sep 11th 2024</p>
                <h2>Working..</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                </div>
            </article>

            <article class="card-proj">
                <header class="card-header">
                <p>Sep 11th 2020</p>
                <h2>Automl: TBD</h2>
                </header>

                <div class="card-author">
                <a class="author-avatar" href="#">
                    <img src="img.png" />
                </a>
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    Iqbal Singh
                </div>
                </div>
                <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                </div>
            </article>


        </section>

        </div>
    )}