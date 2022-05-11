import APCreativityBox from "../Assets/Airplane box.jpg";
import APDrill from "../Assets/Airplane drill.jpg";
import Book from "../Assets/Airport Book.jpg";
import Coloring from "../Assets/Coloring book.jpg";
import Duplo from "../Assets/Duplo.jpg";
import Lego1 from "../Assets/Lego1.jpg";
import Lego2 from "../Assets/Lego2.jpg";
import Magnets from "../Assets/Magnets.jpg";
import Mobile from "../Assets/Mobile.jpg";
import Paper from "../Assets/Paper.jpg";
import Polymer from "../Assets/Polymer airplane.jpg";
import Puzzle1 from "../Assets/Puzzle1.jpg";
import Puzzle2 from "../Assets/Puzzle2.jpg";
import Stickers from "../Assets/Sticker Book.jpg";
import Superwings from "../Assets/Pink airplane.jpg";
import PinkPlane from "../Assets/Toy.jpg";
import WoodToy from "../Assets/Wood.jpeg";
import Wood3Dset from "../Assets/Wood_3d.jpg";
import Wood3D from "../Assets/Wood2_3d.jpg";

const generateToyDB = () => {
    const obj = [
        { name: APCreativityBox, id: "id-01", desc: "Airplane creativity box", selected: 0, price: 10.00 },
        { name: APDrill, id: "id-02", desc: "Take-apart plane with drill", selected: 0, price: 12.90 },
        { name: Book, id: "id-03", desc: "Airport book with flaps", selected: 0, price: 12.50 },
        { name: Coloring, id: "id-04", desc: "Airport coloring book", selected: 0, price: 12.50 },
        { name: Duplo, id: "id-05", desc: "Duplo airplane and airport", selected: 0, price: 40.90 },
        { name: Lego1, id: "id-06", desc: "Lego City airplane", selected: 0, price: 45.20 },
        { name: Lego2, id: "id-07", desc: "Lego Friends airplane", selected: 0, price: 55.60 },
        { name: Magnets, id: "id-08", desc: "Take-apart airplane with magnets", selected: 16.50, price: 10 },
        { name: Mobile, id: "id-09", desc: "Airplane and clouds mobile", selected: 0, price: 18.00 },
        { name: Paper, id: "id-10", desc: "Paper planes kit", selected: 0, price: 13.50 },
        { name: Puzzle1, id: "id-11", desc: "Puzzle airplane 40pcs", selected: 0, price: 8.00 },
        { name: Puzzle2, id: "id-12", desc: "Puzzle airport 60pcs", selected: 0, price: 16.10 },
        { name: Stickers, id: "id-13", desc: "Sticker book airport", selected: 0, price: 9.00 },
        { name: Superwings, id: "id-14", desc: "Superwings plane", selected: 0, price: 11.50 },
        { name: PinkPlane, id: "id-15", desc: "Toy plane with figures", selected: 0, price: 16.50 },
        { name: Polymer, id: "id-16", desc: "Polymer plane", selected: 0, price: 7.10 },
        { name: WoodToy, id: "id-17", desc: "Wooden airplane", selected: 0, price: 13.60 },
        { name: Wood3Dset, id: "id-18", desc: "3D wooden assembly set", selected: 0, price: 15.00 },
        { name: Wood3D, id: "id-19", desc: "3D wooden assembly plane", selected: 0, price: 21.00 },
    ];
    return obj;
};

export default generateToyDB;