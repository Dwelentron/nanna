import { CiShoppingTag } from "react-icons/ci";
import { useCart } from "react-use-cart";
export default function Cakes(){
    const {addItem, inCart, removeItem}= useCart()
    let cakes_displayed = [
        {
            name:"The Classic White",
            id:1,
            quantity:5,
            img:"https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17156-classic-white-cake-600x600.jpg?ext=.jpg",
            price: 1500,
            desc:"This elegant cake is a timeless choice. It features tiers of white cake, frosted with smooth buttercream and decorated with cascading sugar flowers or pearls."
        },
        {
            name:"The Rustic Naked Cake",
            id:2,
            img:"https://i.pinimg.com/736x/6d/a2/ca/6da2ca4f773643d04d02ddc3dfa4437a.jpg",
            price: 700,
            desc:"This on-trend cake features layers of cake exposed, with frosting only in between the tiers and piped details. It's often decorated with fresh flowers, fruits, or greenery for a natural, whimsical look."
        },
        {
            name: "The Watercolor Dream",
            id:3,
            img:"https://celebritycakestudio.com/cdn/shop/products/20210827_105403.jpg?v=1709340946",
            price: 1200,
            desc:"This artistic cake features soft, watercolored washes on the frosting, creating an ethereal, dreamlike effect. It can be personalized with pastel colors and delicate floral designs."
        },
        {
            name:"The Drip Cake",
            id:4,
            img:"https://www.sidechef.com/recipe/7a987b66-0dce-4337-b7ac-4022de5315d5.jpg?d=1408x1120",
            price: 2500,
            desc:`This playful cake features frosting "dripping" down the sides, often in contrasting colors. It's a fun and modern take on the traditional wedding cake and can be dressed up with sprinkles, macarons, or fresh fruit.`
        },
        {
            name:"The Geometric Marvel",
            id:5,
            img:"https://www.amysbakehouse.co.uk/cdn/shop/files/marvel2.jpg?v=1704459378",
            price: 1450,
            desc:"This modern cake features geometric shapes and patterns piped onto the frosting. It's a great choice for couples who love a clean and contemporary aesthetic."
        },
        {
            name:"The Ombre Delight",
            id:6,
            img:"https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2019/01/pepper-delight-neapolitan-cake-7.jpg?resize=2517%2C3178&ssl=1",
            price: 1035,
            desc:"This eye-catching cake features a gradient of colors in the frosting, from light to dark or vice versa. It's a beautiful way to incorporate your wedding colors and create a stunning centerpiece."
        },
        {
            name:"The Metallic Majesty",
            id:7,
            img:"https://www.amazingcakeideas.com/wp-content/uploads/2016/02/Majesty-Cake.jpg",
            price: 3000,
            desc:"This glamorous cake features metallic accents in the frosting or decorations. It adds a touch of luxury and sophistication to your wedding cake."
        },
        {
            name:"The Mini Monogram",
            id:8,
            img:"https://greenweddingshoes.com/wp-content/uploads/2020/06/modernorganic-styled-18.jpg",
            price: 600,
            desc:"This adorable cake features individual mini cakes decorated with your wedding monogram. It's a fun and unique twist on the traditional wedding cake and allows for a variety of flavors."
        },
        {
            name:"The Decadent Chocolate",
            id:9,
            img:"https://bigalscookiejar.com/cdn/shop/files/IMG_4346.jpg?v=1689335464",
            price: 1750,
            desc:"This luxurious cake is for chocolate lovers! It features rich chocolate cake layers, frosting, and decorations. It can be decorated with chocolate shavings, cocoa powder flourishes, or even chocolate sculptures."
        },
        {
            name:"The Cheesecaketastic Celebration",
            id:10,
            img:"https://thecakechica.com/wp-content/uploads/2022/06/Mixed-Berries-and-Cream-Cake-Edited-27-WEB.jpg",
            price: 1650,
            desc:"This delightful option features tiers of your favorite cheesecake flavors, decorated with fruit, chocolate ganache, or whipped cream. It's a perfect choice for a non-traditional wedding or for couples who simply adore cheesecake!"
        },

        //anniversary cakes start here

        {
            name:"Golden Memories",
            id: 11,
            img:"https://img.freepik.com/free-photo/3d-delicious-wedding-cake-design_23-2151109498.jpg",
            price: 3200,
            desc:`This classic cake celebrates a 50th anniversary with a base of golden vanilla cake, frosted in buttercream and adorned with gold dusted sugar pearls and calligraphy that reads "50 Years of Love.`
        },
        {
            name:"Renewed Romance",
            id: 12,
            img:"https://i.pinimg.com/736x/5a/0d/bb/5a0dbbd52e64e7988bcf881bc63c5aa8.jpg",
            price: 1200,
            desc:"Perfect for a 25th anniversary, this elegant cake features alternating tiers of red velvet and white cake, frosted with cream cheese frosting and decorated with cascading fresh roses and a silver anniversary topper."
        },
        {
            name:"Timeless Treasure",
            id: 13,
            img:"https://didicakesbath.com/cdn/shop/products/MountainBikeCake.jpg?v=1661365747",
            price: 2540,
            desc:"This sophisticated cake celebrates any anniversary with a timeless design. Featuring dark chocolate cake layers frosted in rich chocolate ganache, it's adorned with edible gold flakes and a single, elegant sugar orchid."
        },
        {
            name:"Citrus Celebration",
            id: 14,
            img:"https://www.sainsburysmagazine.co.uk/uploads/media/720x770/03/5073-Citrus-and-raspberry-cake-1120.jpg?v=1-0",
            price: 1500,
            desc:"This light and refreshing cake is ideal for a spring anniversary. Featuring lemon cake layers with lemon curd filling and whipped cream frosting, it's decorated with candied citrus slices and fresh mint sprigs."
        },
        {
            name:"Second Helping of Love",
            id: 15,
            img:"https://handletheheat.com/wp-content/uploads/2017/03/Nutella-Cake-Square-scaled.jpg",
            price: 3400,
            desc:`This playful cake is perfect for a fun-loving couple. Featuring a base of chocolate chip cookie dough cake frosted in vanilla buttercream, it's decorated with miniature chocolate chip cookies and a topper that reads "Happily Ever After... Again!`
        },
        {
            name:"Through the Decades",
            id: 16,
            img:"https://i.pinimg.com/originals/ce/a5/5d/cea55d4aa04a4c3f9cf6a53ca7d21bea.jpg",
            price: 3000,
            desc:"This nostalgic cake celebrates a long-lasting marriage. Each tier is a different flavor representing a significant decade in the couple's journey together, with decorations reflecting those eras."
        },
        {
            name:"Vintage Charm",
            id: 17,
            img:"https://thumbs.dreamstime.com/b/vintage-charm-retro-birthday-cake-295729721.jpg",
            price: 2500,
            desc:"This elegant cake is perfect for a couple who loves classic styles. Featuring a base of almond cake frosted in whipped cream, it's adorned with delicate piped sugar flowers and a vintage-inspired cake topper."
        },
        {
            name:"Black Forest Cake",
            id:18,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vm34jpKrSdzp2_p9MO4Tyvkl_FZBsHmIMMfbaQF9Mw&s",
            price:3000,
            desc:"A German dessert, Black Forest cake is a chocolate cake layered with whipped cream, cherries, and Kirschwasser (a cherry liqueur). It's decorated with maraschino cherries and chocolate shavings."
        },
        {
            name:"Lemon Cake",
            id:19,
            img:"https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_630,w_1200/v1689682274/v3/user-recipes/24f916d255c700a508072609a9fd1c9a.jpg",
            price:1500,
            desc:"A light and refreshing cake, lemon cake is perfect for spring and summer. It's made with flour, sugar, butter, eggs, and lemon zest and juice. Lemon cake can be frosted with lemon buttercream, powdered sugar, or a glaze."
        },
        {
            name:"Carrot Cake",
            id:20,
            img:"https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-carrot-cake-1.jpg",
            price:800,
            desc:"This moist and flavorful cake is packed with carrots, raisins, nuts, and spices. It's typically frosted with cream cheese frosting. Carrot cake is a delicious and healthy-ish dessert."
        },
        {
            name:"Tres Leches Cake(chocolate)",
            id:21,
            img:"https://i.pinimg.com/564x/e9/28/bc/e928bc214796541a6e0896d3e3be7d0f.jpg",
            price:950,
            desc:"A Latin American dessert, tres leches cake is a sponge cake that's soaked in three kinds of milk: evaporated milk, condensed milk, and heavy cream. It's topped with whipped cream and sometimes fruit."
        },
        {
            name:"Flan",
            id:22,
            img:"https://www.homecookingadventure.com/wp-content/uploads/2022/01/flan_cake_main1.jpg",
            price:1500,
            desc:"A Spanish and Latin American dessert, flan is a custard cake that's baked in a water bath. It's made with eggs, milk, sugar, and vanilla extract. Flan is typically inverted onto a plate and served with caramel sauce."
        },
        {
            name:"Black Forest",
            id:23,
            img:"https://www.simplyrecipes.com/thmb/m-ZZMZJylaq8tnoqVlVBndXqky4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__10__Black-Forest-Cake-LEAD-8-3ef61f7330e04b1cb989f116836b259c.jpg",
            price:1500,
            desc:"The Black Forest, a densely wooded mountain range in southwestern Germany, is a wonderland of towering evergreens, charming villages, and cascading waterfalls. Steeped in folklore and fairy tales, it offers stunning scenery, outdoor activities for all seasons, and the irresistible treat – Black Forest cake."
        },
        {
            name:"Red velvet",
            id:24,
            img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d26_red_velvet_cake.jpg.rend.hgtvcom.1280.1280.suffix/1371584132020.jpeg",
            price:2500,
            desc:"Red velvet cake is a decadent dessert boasting a deep red hue (thanks to food coloring and a touch of cocoa), a luxuriously soft texture from buttermilk, and a flavor that transcends mere chocolate. It offers a delightful blend of chocolate and vanilla with a hint of tang, all perfectly complemented by the creamy richness of its classic cream cheese frosting."
        }
        
    ]
    return(
        <>

            <div className="">
                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
                {cakes_displayed.map((item, index) => (
                    <div key={index} className="two three flex flex-col justify-between items-center p-4  rounded-lg shadow-inner hover:duration-300 mt-1 hover:mt-0">
                        <section>
                            <h1 className="text-xl font-semibold text-white">{item.name}</h1>
                            <img src={item.img} alt={item.name} className="object-cover hover:object-contain h-48 w-full rounded-lg mb-4" />
                        </section>
                        <section className="text-gray-100">
                            <p>{item.desc}</p>
                        </section>
                        <section className="flex items-center my-2 text-yellow-400">
                            <CiShoppingTag size={20} />
                        KSH {item.price} /=
                        </section>
                        {inCart(item.id) ? 
                            <button className="butt  w-full px-4 py-2 mt-4 text-center bg-green-500 text-white rounded-md font-semibold hover:bg-green-700 italic underline " onClick={()=>removeItem()}>
                            incart
                            </button>
                            :
                            <button className="w-full px-4 py-2 mt-4 text-center bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-700" onClick={()=> addItem(item)}>
                                add to cart
                            </button>    
                        }
                </div>
                ))}
                </section>
                

                </div>
        
        </>
    )
}