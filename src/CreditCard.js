
class CreditCard {
    constructor(cardName, Rewards, annualFee, PurchaseRate, TransferInfo, imageURL, website) {
        this.cardName = cardName;
        this.Rewards = Rewards;
        this.annualFee = annualFee;
        this.PurchaseRate = PurchaseRate;
        this.TransferInfo = TransferInfo;
        this.imageURL = imageURL;
        this.website = website;
    }

    // Getter methods

    getcardName() {
        return this.cardName;
    }
    getRewards() {
        return this.Rewards;
    }

    getannualFee() {
        return this.annualFee;
    }

    getPurchaseRate() {
        return this.PurchaseRate;
    }

    getTransferInfo() {
        return this.TransferInfo;
    }
    getimageURL() {
        return this.imageURL;
    }
    
    

       // Setter methods
    setcardName(cardName) {
        this.cardName = cardName;
    }

    setRewards(Rewards) {
        this.Rewards = Rewards;
    }

    setannualFee(annualFee) {
        this.annualFee = annualFee;
    }
    setPurchaseRate(PurchaseRate) {
        this.PurchaseRate = PurchaseRate;
    }
    setTransferInfo(TransferInfo) {
        this.TransferInfo = TransferInfo;
    }
    setimageURL(imageURL) {
        this.imageURL = imageURL;
    }




    // Method to display card information
    displayInfo() {
        console.log(`Card Name: ${this.cardName}`);
        console.log(`Rewards: ${this.Rewards}`);
        console.log(`annualFee: ${this.annualFee}`);
        console.log(`PurchaseRate: ${this.PurchaseRate}`);
        console.log(`TransferInfo: ${this.TransferInfo}`);
    }
}

export default CreditCard;
