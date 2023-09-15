from flask import Flask, render_template, request
from chatterbot import Chatbot
from chatterbot.trainers import ChatterBotCorpusTrainer
app = Flask(__name__)
bot = Chatbot("Chatterbot", storage_adapter = "chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")
@app.route("/")

def home():
  return render_template("index.html")

@app.route("/get")

def bot_response():
  txt = request.args.get('msg')
  return str(bot.get_response(txt))

if __name__ == "__main__":
  app.run()
