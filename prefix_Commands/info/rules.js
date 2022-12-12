const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "rules",
  description: "Reglas del servidor",
  options: [],
  run: (client, message, prefix, args) => {
    const embed = new EmbedBuilder()
      .setAuthor({name: "KURIKITAKATI", iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
      .setTitle("*Reglas*:")
      .setDescription(`**Las siguientes reglas pueden ser modificadas en cualquier momento. Por favor, leerlas con regularidad.**\n\n**En caso de incumplir las siguientes reglas y/o los términos y condiciones, cómo primera acción se le advertirá al usuario. Si decide ignorar la advertencia, tendrá ban en automático.**\n\u200B`)
      .setThumbnail("https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg")
      .addFields(
        {name: "✦REGLAS DE DISCORD:", value: `\u200B\n**1** → Respetar a todos en el servidor.\n\n**2 → No** se permite ningún tipo de comentarios hirientes, maliciosos o  acoso en el servidor y en el reino.\n\n**3 → No** se tolera amenazas para todos los integrantes del server. Es ban definitivo.\n\n**4 → Prohibido** pedir información personal, al menos que el usuario dé su consentimiento.\n\n**5** → Evite hacer spam innecesario en <#983799688941686846>. Si es necesario se creará un canal para ello.
        `},
        {name: "\u200B", value: `**6** → Para invitar a otros usuarios al server, se deberá de comunicar con los admins por privado. *Excepto a los nuevos miembros del reino Kurikutakati.*\n\n**7** → Usar los canales de texto adecuadamente. En caso que no sea así, se procederá a eliminar los mensajes y llamar en el canal que corresponde.\n\n**8 → No** está permitido publicar contenido que sea: clasista, machista, racista, homofóbico, xenofobia, político, propaganda religiosa, pornografía, etc.\n\n**9 → No** se permite nombres o fotos de perfil ofensivos.\n\n**10** → Si surge un problema con alguno de los integrantes, favor de comunicarlo y buscar una solución razonable.\n\u200B`},
        {name: "✦REGLAS DEL REINO KURIKUTAKATI:", value: `\u200B\n**1** → Respetar a cada uno de los miembros del reino.\n\n**2** → Cualquier duda, sugerencia o ayuda, siéntese libre de pedirlo. Si nadie responde rápido, por favor de mencionar a los admins o miembro del reino. Trataremos de estar lo más presente posible.\n\n**3** → Evitar pedir o exigir cambiar de rango en el reino. Eso está bajo la administración del <@&1032039436273320047>.\n\n**4** → Para participar en la montura del Dingo, se tomará en cuenta las personas que donen mínimo 800 semanalmente. Para los nuevos miembros, podrán entrar a la lista de participantes después de tener una donación general de  2000. En caso que no sé respete lo establecido y participe sin cumplir lo anterior, se le dará la sanción correspondiente.\n\n**5** → Ser tolerante y paciente cuando se realicen las mazmorras y defensa. Algunos se nos va la luz o nos quedamos sin internet.\n\nGracias :3`}
      )
      .setColor("Green")
      .setTimestamp()
      .setFooter({text: "Kurikitakati", iconURL: "https://cdn.discordapp.com/attachments/1021171152963514451/1034554612860063754/1maxresdefault.jpg"})
    message.channel.send({ embeds: [embed] });
  }
};