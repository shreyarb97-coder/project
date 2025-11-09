class LoginP {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(`https://account.samsung.com`);
  }

  // Add more methods like login(), fillForm(), etc.
}

module.exports = LoginP;
