package main;

import bank.account.Account;
import bank.account.CheckingAccount;
import bank.account.SavingsAccount;
import bank.account.VipAccount;
import client.Client;

public class Main {
    public static void main(String[] args) {
        Client adriel = new Client();
        adriel.setName("Adriel Amorim");
        adriel.setAge(28);
        Account checkingA = new CheckingAccount(adriel);
        Account savingsA = new SavingsAccount(adriel);
        Account vipA = new VipAccount(adriel);

        checkingA.deposit(5000);
        System.out.println(" ");
        checkingA.transfer(2000, savingsA);
        System.out.println(" ");
        vipA.deposit(10000);
        System.out.println(" ");
        checkingA.printExtract();
        System.out.println(" ");
        savingsA.printExtract();
        System.out.println(" ");
        vipA.printExtract();
    }
}
