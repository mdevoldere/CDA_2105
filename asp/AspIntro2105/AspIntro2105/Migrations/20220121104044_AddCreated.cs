using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AspIntro2105.Migrations
{
    public partial class AddCreated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "Vegetables",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Created",
                table: "Vegetables");
        }
    }
}
