function paperRequirements (firstBookPrint,howMuchSecond,howMuchWantBook){
    const firstPrintCopy = 100;
    const firstBookPrintCopy = firstBookPrint * firstPrintCopy;
    const needPages = 200;
    const BookPrintSecond = needPages * howMuchSecond;
    const needCopy = 300; 
    const houMuchBook = needCopy * howMuchWantBook;
    return firstBookPrintCopy,BookPrintSecond, houMuchBook;
}   
const firstBookPrint = 1; 
const howMuchSecond = 10; 
const howMuchWantBook = 2; 
paperRequirements(firstBookPrint,howMuchSecond,howMuchWantBook);

