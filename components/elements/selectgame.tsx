"use client";

import { Fragment, useState } from "react";
import { HiOutlineColorSwatch, HiOutlineExternalLink } from "react-icons/hi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { gameList } from "@/content";

const FormSchema = z.object({
  game: z.string({
    required_error: "Please select an email to display.",
  }),
});

export const SelectGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setSelectedGame(data.game);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(true)}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-slate-100">
          <HiOutlineColorSwatch className="text-gray-600 mr-3 w-[18px] h-[18px]" />
          {selectedGame !== "" ? selectedGame : "Choose a game"}
          <em className="ml-5">
            <HiOutlineExternalLink className="text-blue-600 w-[13px] h-[13px]" />
          </em>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] selectGameDialog">
        <DialogHeader>
          <DialogTitle className="text-center mb-5 text-sm">
            Please select you favourite game
          </DialogTitle>
          <DialogDescription>&nbsp;</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="flex flex-col">
              <div className="flex w-full items-center">
                <FormField
                  control={form.control}
                  name="game"
                  render={({ field }) => (
                    <FormItem className="w-full mb-4">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full px-5 h-12 [&>span]:w-full [&>span]:text-left [&>span]:font-semibold">
                          <SelectValue placeholder="Choose option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.entries(gameList).map(([type, games]) => (
                              <Fragment key={type}>
                                <SelectLabel className="uppercase bg-slate-300 text-xs">
                                  {type.charAt(0).toUpperCase() + type.slice(1)}
                                </SelectLabel>
                                {games.map((game) => (
                                  <SelectItem value={game.title} key={game.id}>
                                    <p className="font-semibold text-sm text-left w-full">
                                      {game.title}
                                    </p>
                                    <span className="text-xs text-left">
                                      {game.developer}
                                    </span>
                                  </SelectItem>
                                ))}
                              </Fragment>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="justify-center sm:justify-center">
              <Button type="submit">Save Game</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
