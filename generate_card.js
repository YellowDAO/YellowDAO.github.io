import fs from "fs";
import format from "string-template";

const cardTemplate = fs.readFileSync("./_template.html", "utf8");
const cardTemplateStr = cardTemplate.toString();

const maxSupply = 10000;
const indexes = [...Array(maxSupply).keys()];
const outputDirectory = "./card/";

for (let index of indexes) {
  const card = {
    no: index.toString().padStart(6, "0"),
    id: index,
  };
  const htmlData = format(cardTemplateStr, card);

  fs.writeFileSync(`${outputDirectory}/${index}.html`, htmlData);
}
