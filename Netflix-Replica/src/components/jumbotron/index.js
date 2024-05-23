import { Container,Inner, Pane, Title, SubTitle,Image, Item } from "./styles/jumbotron"

export default function Jumbotron({children, direction = 'row', ...restProps}) { //default to row if no Prop is passed
    return(
       <Item {...restProps}>
            <Inner direction ={direction} >
                {children}
            </Inner>
        </Item>  
    )
}


// COMPOUND COMPONENTS
// They grab the styled components and apply it 
// Using this method it allows us to get all kind of styled components from a single import, Jumbotron
Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({children, ...restProps}){
    return <Image {...restProps} />
}