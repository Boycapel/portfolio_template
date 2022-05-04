// Import Assets
import mintingbot from '../assets/mintingbot.png';
import nftmarketplace from '../assets/nftmarketplace.jpg';
import ya from '../assets/ya.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>NFT Minting Bot</h3>
                    <img src={mintingbot} alt="NFT Minting Bot" />
                    <p>a  NFT Batch minting bot  that can mint one or multiple nfts.
                    </p>

                   
                    <a href="https://github.com/Boycapel/nftmintingbot" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Uniswap</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Defi Yield Aggregator</h3>
                    <img src={ya} alt="Defi Yield Aggregator" />
                    <p>This project is a simple decentrialized app where a user can deposit DAI into our smart contract. Once funds are deposited, the contract compares the interest rate of Compound & Aave, and deposits funds to whichever has the highest interest rate. The user can rebalance his/her funds to ensure that the funds are still currently in the higher interest rate protocol, and can also withdraw at any time.
                    </p>

                
                    <a href="https://github.com/Boycapel/YA" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src={nftmarketplace} alt="NFT Marketplace"/>
                    <p>This project I cloned and created a NFT marketplace that mimics the functions of OpenSea, and catalogged all transactions using metamask, and webiste.
                    </p>

                    
                    <a href="https://github.com/Boycapel/openseaCLONE" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;