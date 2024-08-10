"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HiOutlineDotsHorizontal,
  HiOutlineSelector,
  HiOutlineAdjustments,
  HiOutlineTrash,
  HiOutlineClipboardList,
  HiOutlineEye,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { data } from "@/content/games";
import { IGameInfo } from "@/interface";

export const columns: ColumnDef<IGameInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "game_id",
    header: "ID",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("game_id")}</div>
    ),
  },
  {
    accessorKey: "game_name",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Game name
          <HiOutlineSelector className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {row.getValue("game_name")}
      </div>
    ),
  },
  {
    accessorKey: "client_id",
    header: "Client ID",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {row.getValue("client_id")}
      </div>
    ),
  },
  {
    accessorKey: "genre",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Genre
          <HiOutlineSelector className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("genre")}</div>
    ),
  },
  {
    accessorKey: "create_date",
    header: "Create Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("create_date")}</div>
    ),
  },
  {
    accessorKey: "bundle_price",
    header: () => <div className="text-left">Wallet amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("bundle_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: "active_status",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Active
          <HiOutlineSelector className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const verifyStatus = row.getValue("active_status")
        ? "Verified"
        : "Not verified";
      return (
        <div
          className={`${
            verifyStatus === "Verified"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          } inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold text-foreground`}
        >
          <span
            className={`${
              verifyStatus === "Verified" ? "bg-green-700" : "bg-red-700"
            } h-[6px] w-[6px] rounded-full mr-[6px]`}
          ></span>
          {verifyStatus}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <HiOutlineDotsHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="font-semibold text-xs">
                <HiOutlineClipboardList className="mr-2" /> View
              </DropdownMenuItem>
              <DropdownMenuItem className="font-semibold text-xs">
                <HiOutlineEye className="mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="font-semibold text-xs">
                <HiOutlineTrash className="mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function Games() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-end mb-1 pb-6 border-b">
        <h1 className="font-semibold mr-8 text-base text-black">
          Manage List of Games
          <Badge className="ml-4 bg-slate-300 text-black">
            {table.getFilteredRowModel().rows.length} games
          </Badge>
        </h1>
        <ul className="flex font-medium text-xs mb-[3px] text-slate-500">
          <li>... /&nbsp;</li>
          <li>Games</li>
        </ul>
      </div>
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Search with Game name..."
            value={
              (table.getColumn("game_name")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("game_name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm shadow-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto shadow-sm">
                <HiOutlineAdjustments className="mr-2 h-4 w-4" />
                <p className="font-semibold text-xs">View</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader className="bg-slate-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-sm"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="py-2 font-medium text-sm"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center font-semibold text-sm"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex items-center mr-4">
              <p className="text-sm font-medium mr-2">Go to page</p>
              <input
                type="number"
                min="1"
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded h-8 w-14 text-center"
              />
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <HiOutlineChevronDoubleLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <HiOutlineChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <HiOutlineChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <HiOutlineChevronDoubleRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
