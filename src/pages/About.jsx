import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { mobile } from '../Responsive';

const Container = styled.div`
            background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4893798.jpg") center;
            background-size: cover;
            /* width:100vh; */
            height:100vh;
            ${mobile({ height: '100%' })}
            `;


const About = () => {
    return (
        <Container>
            <Navbar />
            <div className='container pb-5'>
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repudiandae rem nam perspiciatis magni accusamus, magnam animi minus recusandae molestiae, perferendis possimus dolores at quod cumque nostrum dignissimos nemo explicabo dolorem laboriosam tempora? Optio velit perspiciatis eius a facilis, quis voluptatem alias obcaecati explicabo, incidunt ipsam repellendus in minus unde magni distinctio inventore! Quae voluptates doloremque explicabo nulla, quaerat ab quidem quas maiores enim id officia ea excepturi commodi. Accusamus quibusdam, ipsa, nam necessitatibus minus ullam voluptatum, incidunt rem perspiciatis illo tenetur autem dolores non repudiandae blanditiis amet voluptatem quod delectus. Molestiae, eius mollitia. Beatae aliquid doloremque tempora ullam quod eum iste, optio ratione accusamus fugit tempore, voluptatem mollitia accusantium quasi reprehenderit facilis earum. Totam accusamus labore delectus cumque at. Saepe hic quia consequatur iusto molestiae tenetur provident dolorum earum adipisci eius incidunt non natus, cumque dignissimos architecto animi maxime repellat repellendus tempora nostrum. Eos possimus voluptatem cupiditate eveniet quibusdam, optio ullam tempora. Pariatur corporis blanditiis hic quas voluptatibus quam, ipsa tempora cum, aut, esse maiores sed eligendi totam ea ullam unde eum. Doloremque delectus commodi saepe, ratione consequuntur ex eius sint. A dolorum dicta tempore, voluptates tempora deserunt modi quae illo. Facere, voluptas exercitationem eaque accusamus natus ad consequatur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio porro autem atque cupiditate libero, quaerat laboriosam rem accusantium repellat sit accusamus at pariatur corporis quod in harum incidunt exercitationem culpa a quisquam adipisci consequuntur magnam aliquid? In ipsam ullam quibusdam a beatae sunt! Quasi, dolorem sed facere esse, excepturi quod ullam veritatis blanditiis dignissimos aliquid nostrum fuga doloremque a voluptas fugiat obcaecati quos fugit minus provident omnis sequi nihil? Aliquid excepturi aperiam voluptatem animi distinctio alias illo tempora debitis rem quasi, magni qui est cum ut sapiente nulla itaque perspiciatis ratione magnam? Aperiam at quam asperiores doloribus delectus consectetur sed sapiente distinctio perspiciatis? Voluptates beatae saepe natus earum. Totam perferendis voluptatem repellendus minima exercitationem odio nemo molestias officiis quibusdam explicabo saepe a provident suscipit asperiores magnam, necessitatibus placeat laboriosam aspernatur voluptates! Ipsam quisquam vitae sapiente aperiam quod nihil amet porro enim? Eaque iusto asperiores ea! Debitis ex provident officia, est, soluta totam ducimus eum amet molestiae necessitatibus distinctio nobis. Aspernatur, quaerat autem omnis maxime obcaecati laboriosam repellat saepe iusto impedit quas corporis consequatur minus cupiditate at veniam voluptates dicta ad quia velit aliquid dolorum placeat sunt? Quo voluptate quasi maiores suscipit blanditiis, perspiciatis ullam, nostrum totam, tempora sapiente placeat maxime.</p>
            </div>
        </Container>
    )
}

export default About