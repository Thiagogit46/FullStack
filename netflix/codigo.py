opcao=""
usuario=""
senha=""
conf_senha=""
def menu():
    print("1 - Login")
    print("2 - Cadastro")
    print("3 - Cadastrar Video:")
    print("4 - Sair")
    opcao=input("Escolha a opção: ")
    return(opcao)
def menu_login ():
    usuario=input("Digite o seu usuário:")
    senha=input("Digite sua senha: ")
def menu_cadastro():
    usuario= input("Digite o usuário: ")
    senha= input("Digite sua senha: ")
    conf_senha=input("confirme sua senha: ")
    input("digite 'sair' para voltar ao menu: ")
def menu_principal():
    print("1 - Proucurar Video")
    print("2 - Avaliar Filme")
    print("3 - Sair")
    opcao=input("Escolha uma das opções")
print(menu)