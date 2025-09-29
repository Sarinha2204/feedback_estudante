import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk  


class AppLogin(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Avaliação do Docente")
        self.geometry("900x600")
        self.configure(bg="white")

        # Cabeçalho azul
        header = tk.Frame(self, bg="#004F9F", height=100)
        header.pack(fill="x", side="top")

        # Logo da escola
        try:
            logo_img = Image.open("escola_JT.png").resize((80, 80))
            self.logo = ImageTk.PhotoImage(logo_img)
            logo_label = tk.Label(header, image=self.logo, bg="#004F9F")
            logo_label.pack(side="left", padx=20)
        except Exception:
            logo_label = tk.Label(header, text="[Logo]", fg="white", bg="#004F9F")
            logo_label.pack(side="left", padx=20)

        # Título centralizado
        titulo = tk.Label(
            header,
            text="AVALIAÇÃO DO DOCENTE",
            font=("Arial", 18, "bold"),
            fg="white",
            bg="#004F9F"
        )
        titulo.place(relx=0.5, rely=0.5, anchor="center")

        # Container principal
        container = tk.Frame(self, bg="white")
        container.pack(expand=True, fill="both", padx=40, pady=40)

        # Imagem ilustrativa
        try:
            ilustracao_img = Image.open("imagem_ilustrativa.png").resize((330, 445))
            self.ilustracao = ImageTk.PhotoImage(ilustracao_img)
            ilustracao_label = tk.Label(container, image=self.ilustracao, bg="white")
            ilustracao_label.pack(side="left", padx=20)
        except Exception:
            ilustracao_label = tk.Label(container, text="[Imagem]", bg="white")
            ilustracao_label.pack(side="left", padx=20)

        # Card de login
        login_card = tk.Frame(container, bg="white", bd=1, relief="solid")
        login_card.pack(side="left", padx=20, ipadx=20, ipady=20)

        titulo_login = tk.Label(
            login_card, text="Login", font=("Arial", 16, "bold"), bg="white"
        )
        titulo_login.pack(pady=(0, 10))

        # Campo código
        tk.Label(login_card, text="Código do estudante (sgde):", bg="white").pack(anchor="w")
        self.codigo_entry = tk.Entry(login_card, width=30)
        self.codigo_entry.pack(pady=5)
        self.codigo_erro = tk.Label(login_card, text="", fg="red", bg="white", font=("Arial", 10))
        self.codigo_erro.pack(anchor="w")

        # Campo senha
        tk.Label(login_card, text="Senha:", bg="white").pack(anchor="w", pady=(10, 0))
        self.senha_entry = tk.Entry(login_card, width=30, show="*")
        self.senha_entry.pack(pady=5)
        self.senha_erro = tk.Label(login_card, text="", fg="red", bg="white", font=("Arial", 10))
        self.senha_erro.pack(anchor="w")

        # Botão
        acessar_btn = tk.Button(
            login_card,
            text="Acessar",
            bg="#28a745",
            fg="white",
            font=("Arial", 12, "bold"),
            width=20,
            command=self.validar_login
        )
        acessar_btn.pack(pady=15)

        # Texto informativo
        info = tk.Label(
            login_card,
            text="Caso você não consiga acessar o sistema,\n"
                 "entre em contato com a Direção da Escola\n"
                 "para regularizar seu acesso.",
            bg="white",
            fg="black",
            font=("Arial", 10),
            justify="center"
        )
        info.pack(pady=5)

    def validar_login(self):
        codigo = self.codigo_entry.get().strip()
        senha = self.senha_entry.get().strip()

        valido = True
        self.codigo_erro.config(text="")
        self.senha_erro.config(text="")

        if not codigo:
            self.codigo_erro.config(text="Campo Obrigatório")
            valido = False
        if not senha:
            self.senha_erro.config(text="Campo Obrigatório")
            valido = False

        if valido:
            messagebox.showinfo("Login", "Acesso permitido!")


if __name__ == "__main__":
    app = AppLogin()
    app.mainloop()
