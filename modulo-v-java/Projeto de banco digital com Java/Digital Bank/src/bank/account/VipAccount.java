package bank.account;

import client.Client;

public class VipAccount extends Account {
    public VipAccount(Client client) {
        super(client);
    }

    @Override
    public void printExtract() {
        System.out.println("=== VIP Account Balance ===");
        super.printExtractGeneric();
    }

    @Override
    public void deposit(double value) {
        super.balance = balance + (value * 1.01);
        System.out.printf("%.2f$ was deposited into %s's VIP account%n", value, this.client.getName());
        System.out.println("Vip accounts get 1% more money when making a deposit.");
        System.out.printf("Your new balance is: %.2f$%n", balance);
    }
}
