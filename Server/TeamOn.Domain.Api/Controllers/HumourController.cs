using Microsoft.AspNetCore.Mvc;
using TeamOn.Domain.Contracts.Commands;
using TeamOn.Domain.Humours.Commands.Handlers;
using TeamOn.Domain.Humours.Commands.Inputs;
using TeamOn.Domain.Humours.Entities;

namespace TeamOn.Domain.Api.Controllers;

[ApiController]
[Route("/humour")]
public class HumourController : ControllerBase
{
    [Route("send")]
    [HttpPost]
    public ICommandResult SendHumour(
        [FromBody] SendHumourCommand command,
        [FromServices] SendHumourHandler handler)
    => handler.Handle(command);

    [Route("all/user")]
    [HttpGet]
    public IEnumerable<HumourEntity> GetAllHumoursByUser(
        // [FromBody] string refUser
        [FromServices] GetHumourHandler handler)
        => handler.GetAllByUser("string");

    [Route("id")]
    [HttpGet]
    public List<HumourEntity> GetAllHumoursById([FromBody] string humourId)
        => throw new NotImplementedException();
}
