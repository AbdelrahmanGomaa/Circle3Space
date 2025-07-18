﻿using circle3coworkingspace.Models;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models;

namespace circle3coworkingspace.Components
{
    public class ContactViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("~/Views/Partials/Forms/ContactForm.cshtml", new ContactFormViewModel());
        }
    }
}
