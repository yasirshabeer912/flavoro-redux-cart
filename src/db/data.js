const products = [
    {
        "id": 1,
        "name": "California Roll",
        "category": "Sushi",
        "image": "https://w7.pngwing.com/pngs/893/641/png-transparent-sushi-sushi-makizushi-japanese-cuisine-sashimi-onigiri-sushi-food-recipe-cooking-thumbnail.png",
        "ratings": 4.5,
        "price": 12.99
    },
    {
        "id": 2,
        "name": "Spaghetti Carbonara",
        "category": "Pasta",
        "image": "https://w7.pngwing.com/pngs/960/168/png-transparent-pasta-salad-on-plate-penne-caesar-salad-pasta-salad-italian-cuisine-pizza-pasta-food-recipe-american-food-thumbnail.png",
        "ratings": 4.7,
        "price": 14.99
    },
    {
        "id": 3,
        "name": "Classic Cheeseburger",
        "category": "Burger",
        "image": "https://w7.pngwing.com/pngs/830/422/png-transparent-three-patty-burger-hamburger-veggie-burger-fatburger-restaurant-cheese-burger-king-food-beef-recipe-thumbnail.png",
        "ratings": 4.3,
        "price": 9.99
    },
    {
        "id": 4,
        "name": "Margherita Pizza",
        "category": "Pizza",
        "image": "https://w7.pngwing.com/pngs/280/611/png-transparent-pizza-hamburger-submarine-sandwich-restaurant-oven-pizza-food-cheese-recipe-thumbnail.png",
        "ratings": 4.6,
        "price": 11.99
    },
    {
        "id": 5,
        "name": "Caesar Salad",
        "category": "Salad",
        "image": "https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png",
        "ratings": 4.8,
        "price": 8.99
    },
    {
        "id": 6,
        "name": "Chocolate Chip Ice Cream",
        "category": "Ice Cream",
        "image": "https://w7.pngwing.com/pngs/681/659/png-transparent-ice-cream-cones-sundae-icecream-cream-food-frozen-dessert-thumbnail.png",
        "ratings": 4.9,
        "price": 6.99
    },
    {
        "id": 7,
        "name": "Dragon Roll",
        "category": "Sushi",
        "image": "https://w7.pngwing.com/pngs/588/319/png-transparent-sushi-doughnut-japanese-cuisine-sushi-food-recipe-green-tea-thumbnail.png",
        "ratings": 4.4,
        "price": 15.99
    },
    {
        "id": 8,
        "name": "Fettuccine Alfredo",
        "category": "Pasta",
        "image": "https://w7.pngwing.com/pngs/462/916/png-transparent-pasta-spaghetti-with-meatballs-pasta-salad-tomato-sauce-pastas-miscellaneous-food-recipe-thumbnail.png",
        "ratings": 4.6,
        "price": 13.99
    },
    {
        "id": 9,
        "name": "BBQ Bacon Burger",
        "category": "Burger",
        "image": "https://w7.pngwing.com/pngs/868/141/png-transparent-hamburger-veggie-burger-fast-food-cheeseburger-buffalo-burger-burger-food-cheese-nutrition-thumbnail.png",
        "ratings": 4.2,
        "price": 10.99
    },
    {
        "id": 10,
        "name": "Pepperoni Pizza",
        "category": "Pizza",
        "image": "https://w7.pngwing.com/pngs/100/921/png-transparent-pizza-hut-italian-cuisine-take-out-restaurant-pizza-pizza-pie-food-pizza-logo-pizza-delivery-thumbnail.png",
        "ratings": 4.7,
        "price": 12.99
    },
    {
        "id": 11,
        "name": "Greek Salad",
        "category": "Salad",
        "image": "https://w7.pngwing.com/pngs/392/336/png-transparent-salad-illustration-greek-salad-caesar-salad-vegetable-graphy-a-fruit-and-vegetable-natural-foods-leaf-vegetable-food-thumbnail.png",
        "ratings": 4.5,
        "price": 9.99
    },
    {
        "id": 12,
        "name": "Vanilla Ice Cream",
        "category": "Ice Cream",
        "image": "https://w7.pngwing.com/pngs/53/988/png-transparent-ice-cream-cones-sundae-gelato-icecream-cream-food-frozen-dessert-thumbnail.png",
        "ratings": 4.7,
        "price": 7.99
    },
    {
        "id": 13,
        "name": "Rainbow Roll",
        "category": "Sushi",
        "image": "https://w7.pngwing.com/pngs/689/484/png-transparent-sushi-japanese-cuisine-sashimi-makizushi-tempura-sushi-food-recipe-sashimi-thumbnail.png",
        "ratings": 4.6,
        "price": 16.99
    },
    {
        "id": 14,
        "name": "Penne alla Vodka",
        "category": "Pasta",
        "image": "https://w7.pngwing.com/pngs/35/172/png-transparent-pasta-italian-cuisine-pasta-al-dente-espresso-food-pastas-miscellaneous-seafood-gourmet-thumbnail.png",
        "ratings": 4.8,
        "price": 15.99
    },
    {
        "id": 15,
        "name": "Veggie Burger",
        "category": "Burger",
        "image": "https://w7.pngwing.com/pngs/315/715/png-transparent-burger-with-ham-and-cheese-hamburger-bacon-sushi-pizza-cheeseburger-burger-king-food-recipe-cheese-thumbnail.png",
        "ratings": 4.4,
        "price": 9.99
    },
    {
        "id": 16,
        "name": "Hawaiian Pizza",
        "category": "Pizza",
        "image": "https://w7.pngwing.com/pngs/606/648/png-transparent-california-style-pizza-sicilian-pizza-chrono-pizza-fast-food-pizza-menu-food-recipe-pizza-delivery-thumbnail.png",
        "ratings": 4.5,
        "price": 13.99
    },
    {
        "id": 17,
        "name": "Cobb Salad",
        "category": "Salad",
        "image": "https://w7.pngwing.com/pngs/716/980/png-transparent-salad-bar-pasta-salad-egg-salad-greek-salad-salad-vegetable-salad-in-nowl-leaf-vegetable-food-strawberries-thumbnail.png",
        "ratings": 4.6,
        "price": 10.99
    },
    {
        "id": 18,
        "name": "Strawberry Ice Cream",
        "category": "Ice Cream",
        "image": "https://w7.pngwing.com/pngs/446/332/png-transparent-cherry-ice-cream-ice-cream-cones-milkshake-strawberry-ice-cream-icecream-cream-food-frozen-dessert-thumbnail.png",
        "ratings": 4.8,
        "price": 8.99
    },
    {
        "id": 19,
        "name": "Tempura Roll",
        "category": "Sushi",
        "image": "https://w7.pngwing.com/pngs/266/21/png-transparent-wooden-chopsticks-graphy-sushi-sushi-photography-hand-eating-thumbnail.png",
        "ratings": 4.7,
        "price": 14.99
    },
    {
        "id": 20,
        "name": "Linguine with Clams",
        "category": "Pasta",
        "image": "https://w7.pngwing.com/pngs/103/641/png-transparent-pasta-dish-on-fork-pasta-spaghetti-graphy-fork-food-fork-stock-photography-thumbnail.png",
        "ratings": 4.5,
        "price": 16.99
    },
    {
        "id": 21,
        "name": "BBQ Chicken Burger",
        "category": "Burger",
        "image": "https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe-thumbnail.png",
        "ratings": 4.3,
        "price": 11.99
    },
    {
        "id": 22,
        "name": "Mushroom Pizza",
        "category": "Pizza",
        "image": "https://w7.pngwing.com/pngs/658/279/png-transparent-pizza-dish-hawaiian-pizza-ham-pepperoni-meat-pizza-food-beef-olive-thumbnail.png",
        "ratings": 4.4,
        "price": 12.99
    },
    {
        "id": 23,
        "name": "Spinach Salad",
        "category": "Salad",
        "image": "https://w7.pngwing.com/pngs/694/828/png-transparent-bowl-of-vegetable-salad-greek-salad-vinaigrette-caesar-salad-fruit-salad-salad-leaf-vegetable-food-recipe-thumbnail.png",
        "ratings": 4.7,
        "price": 9.99
    },
    {
        "id": 24,
        "name": "Rocky Road Ice Cream",
        "category": "Ice Cream",
        "image": "https://w7.pngwing.com/pngs/605/970/png-transparent-icecreams-and-milk-shakes-chocolate-shakes-and-strawberry-shakes-thumbnail.png",
        "ratings": 4.9,
        "price": 7.99
    }
]

export default products;