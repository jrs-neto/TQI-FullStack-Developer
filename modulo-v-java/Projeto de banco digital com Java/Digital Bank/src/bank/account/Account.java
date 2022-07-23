package bank.account;

import client.Client;

import java.util.Random;

public abstract class Account implements IAccount {
    protected static final String DEFAULT_AGENCY = "0001";
    protected String agency;
    protected int accountNumber;
    protected double balance = 0.00;
    protected Client client;

    static Random random = new Random();

    public Account(Client client) {
        int accountNumberGenerator = random.nextInt(99999);
        this.agency = DEFAULT_AGENCY;
        this.accountNumber = accountNumberGenerator;
        this.client = client;
    }

    public void withdraw(double value) {
        this.balance -= value;
        System.out.printf("%.2f$ was withdrawn into %s's account%n", value, this.client.getName());
        System.out.printf("New balance is: %.2f$%n", balance);
    }

    public void deposit(double value) {
        this.balance += value;
        System.out.printf("%.2f$ was deposited into %s's account%n", value, this.client.getName());
        System.out.printf("New balance is: %.2f$%n", balance);
    }

    public void transfer(double value, Account receiverAccount ) {
        this.balance -= value;
        receiverAccount.balance += value;
        System.out.printf("%.2f$ transferred from %s's account into %s's account%n", value, this.client.getName(), receiverAccount.client.getName());
        System.out.printf("New balance is: %.2f$%n", balance);
    }

    protected void printExtractGeneric() {
        System.out.printf("Owner: %s, %d%n", this.client.getName(), this.client.getAge());
        System.out.printf("Agency: %s%n", this.agency);
        System.out.printf("Account: %d%n", this.accountNumber);
        System.out.printf("Balance: %.2f$%n", this.balance);
    }

    public String getAgency() {
        return agency;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }
}
