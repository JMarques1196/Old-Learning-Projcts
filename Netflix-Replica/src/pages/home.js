import { OptForm, Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
// JumbotronContainer is a default export and has no named values, so we dont need
//to use {} to import it.

export default function Home() {
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.Subtitle>Watch anywhere. Cancel at any time</Feature.Subtitle>
            <OptForm>
                <OptForm.Input placeholder="Email Address"/>
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to Watch? Enter your email to create or restart your memebership</OptForm.Text>
            </OptForm>
            </Feature>
        </HeaderContainer>    
        
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    )
}