package bank.account;

public interface IAccount {
    void withdraw(double value);
    void deposit(double value);
    void transfer(double value, Account receiverAccount);
    void printExtract();
}
