import Navbar from "./Navbar"
import { QuoteCard } from "./quoteCard"
// import '/quoteCard.css';


export const QuoteScreen = (props) => {

    return (
        <>
            <section>
                <QuoteCard
                    description={"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding."}
                    author={"Adam Scott"}
                />

                <QuoteCard
                    description={"Eat breakfast like a king, lunch like a prince, and dinner like a pauper."}
                    author={"Adelle Davis"}
                />

                <QuoteCard
                    description={"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are."}
                    author={"Adelle Davis"}
                />

                <QuoteCard
                    description={"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet."}
                    author={"Albert Einstein"}
                />


                <QuoteCard
                    description={"Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth."}
                    author={"Alice May Brock"}
                />

                <QuoteCard
                    description={`Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.`}
                    author={"Anthelme Brillat-Savarin"}
                />

                <QuoteCard
                    description={"Health food makes me sick."}
                    author={"Eike von Repkow"}
                />


                <QuoteCard
                    description={`Health food makes me The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.`}
                    author={"Epictetus"}
                />


                <QuoteCard
                    description={`Bear in mind that you should conduct yourself in life as at a feast. `}
                    author={"George Bernard Shaw"}
                />


                <QuoteCard
                    description={`He who comes first, eats first. [Familiar as: First come first served.]`}
                    author={"Epictetus"}
                />


                <QuoteCard
                    description={`The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.`}
                    author={"G. K. Chesterton"}
                />
            </section>
        </>
    )

}