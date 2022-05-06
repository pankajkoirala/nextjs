export function prepareMail(data) {
  return {
    from: 'TEA SHOP"<NoReply@graphene.com.np>',
    to: data.email,
    subject: "Order In Process",
    text: "Verify your account",
    html: `
          <P>Hello <strong>${data.fullName}</strong></P>
          <p>This is your order confirmation process. This mail is the conformation letter that your product is in process.</p>
          <p>We will contact you within 24 hours.</p>
          <p>If you have not signed up to this kindly ignore this email.</p>
          <p>Regards,</p>
          <p>TEA SHOP</p>
          `,
  };
}
