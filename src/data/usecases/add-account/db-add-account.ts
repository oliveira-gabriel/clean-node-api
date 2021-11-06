import { AccountModel } from '../../../domain/models/account'
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const encryptedPass = await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve({ name: '', email: '', id: '1', password: encryptedPass }))
  }
}
