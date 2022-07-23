package bank.account;

import client.Client;

public class CheckingAccount extends Account {
    public CheckingAccount(Client client) {
        super(client);
    }

    @Override
    public void printExtract() {
        System.out.println("=== Checking Account Balance ===");
        super.printExtractGeneric();
    }


}
